const spawn = require('child_process').spawn;

const process = spawn('python', ['./mask_detector.py', 0])
