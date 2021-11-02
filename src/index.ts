import { Server } from 'socket.io';
import * as dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

const io: Server = new Server(server, {
    path: '/socket.io',
    serveClient: false,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false,
    cors: {
        origin: true,
    },
});

app.use(
    cors({
        origin: true,
    }),
);

// ===== LOGICS =====

type Vector3 = {
    x: number;
    y: number;
    z: number;
};
type Quaternion = {
    x: number;
    y: number;
    z: number;
    w: number;
};

type SensorData = {
    Accelerometer: null | Vector3;
    Gyroscope: null | Vector3;
    LinearAccelerationSensor: null | Vector3;
    AbsoluteOrientationSensor: null | Quaternion;
    RelativeOrientationSensor: null | Quaternion;
};

const defaultData: SensorData = {
    Accelerometer: null,
    Gyroscope: null,
    LinearAccelerationSensor: null,
    AbsoluteOrientationSensor: null,
    RelativeOrientationSensor: null,
};

let data: { [key: string]: SensorData } = {};

app.use('/', express.static('public'));
app.get('/get', (req, res) => {
    const id = req.query['id'];
    if (!id || id.length != 6 || typeof id !== 'string') {
        res.status(400).send('Bad ID');
        return;
    }
    res.send(data[id as string] || defaultData);
});
app.get('/get-all', (req, res) => {
    res.send(data);
});

io.on('connection', (socket) => {
    const id = getUniqueId(Object.keys(data));

    socket.send('id', id);

    socket.on('message', (type: string, receivedData: Partial<SensorData>) => {
        switch (type) {
            case 'data':
                data[id] = { ...defaultData, ...receivedData };
        }
    });

    socket.on('disconnect', () => {
        data = Object.entries(data).reduce((prev, [key, value]) => (key === id ? prev : { ...prev, [key]: value }), {});
    });
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// ===== FUNCTIONS =====

function getUniqueId(notIn: string[]) {
    let id: string;
    do {
        id = Math.floor(Math.random() * 1000000)
            .toString()
            .padStart(6, '0');
    } while (notIn.includes(id));

    return id;
}
