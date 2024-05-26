function blockRegion(origin, distance, endSub=false) {
    if (typeof origin !== "number") {
        throw new Error();
    }

    if (typeof distance !== "number") {
        throw new Error();
    }

    if (typeof endSub !== "boolean") {
        throw new Error();
    }

    const start = origin - distance;
    let end = origin + distance;

    if (endSub) {
        end -= 1;
    }

    return [start, end];
}

function blockToByte(block, size) {
    if (typeof block !== "number") {
        throw new Error();
    }

    if (typeof size !== "number") {
        throw new Error();
    }

    return block * size;
}

function byteToBlock(byte, size) {
    if (typeof byte !== "number") {
        throw new Error();
    }

    if (typeof size !== "number") {
        throw new Error();
    }

    return byte / size;
}

function pow2To10(count) {
    if (typeof count !== "number") {
        throw new Error();
    }

    return Math.pow(2, count * 10);
}

function pow10To3(count) {
    if (typeof count !== "number") {
        throw new Error();
    }

    return Math.pow(10, count * 3);
}

const powCountB = 0;
const powCountK = 1;
const powCountM = 2;
const powCountG = 3;
const powCountT = 4;

const lbaBlockSize = 512;
