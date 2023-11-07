interface Post {
    title: string;
    text: string;
    image: string;
}

interface Park {
    id: number;
    name: string;
    description: string;
    posts: Post[];
    // niz je objekata a ne 1 objekt, od doli put gori
}

interface All {
    parks: Park[];
}


interface Coordinate {
    lon: number;
    lat: number;
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}

interface All {
    cord: Coordinate;
    weather: Weather[];
    base: string;
    main: Main;

}


interface Wind {
    speed: number;
    deg: number;
}