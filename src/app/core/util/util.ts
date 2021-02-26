export class Util {
    static isEmpty = value => {
        if (value === undefined || value === null || value === '') {
            return true;
        } else if (typeof value === 'number') {
            return false;
        } else if (typeof value === 'string') {
            return value.trim().length === 0;
        } else if (Array.isArray(value)) {
            return value.length === 0;
        } else if (typeof value === 'object') {
            return value == null || Object.keys(value).length === 0;
        } else if (typeof value === 'boolean') {
            return false;
        } else {
            return !value;
        }
    }
}

export class ObjectUtil {
}

export class StringUtil {
    static capitalizeFirstLetter(str): string {
        return str ? str.charAt(0).toUpperCase() + str.slice(1) : undefined;
    }
}

export class NumberUtil {
}

export class ArrayUtil {
}
