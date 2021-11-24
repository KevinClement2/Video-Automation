const { render } = require('@nexrender/core')

let job = {
    template: {
        src: "file:///D:/Nexrender/AudioVisualizer.aep",
        composition: "Main",
        frameIncrement: 10,
        frameEnd: 400
    },
    assets:[
        {
            src:"file:///D:/Nexrender/Assets/background.jpeg",
            type: "image",
            layerName: "background"
        },
        {
            src:"file:///D:/Nexrender/Assets/audio.mp3",
            type: "audio",
            layerName: "audio"
        },
        {
            src:"file:///D:/Nexrender/Assets/image.jpg",
            type: "image",
            layerName: "image.jpg"
        },
        {
            property: "Source Text",
            type: "data",
            layerName: "Artist",
            value: "Miyavi & PVRIS"
        },
        {
            property: "Source Text",
            type: "data",
            layerName: "Song",
            value: "Snakes"
        },
        {
            type: "script",
            src:"file:///D:/Nexrender/complength.jsx"
        }
    ],
    actions:{
        postrender: [
            {
                module: "@nexrender/action-encode",
                preset: "mp4",
                output: "encoded.mp4",
                parmas: {"-vcodec": "libx264", "-r": 25}
            },
            {
                module: "@Nexrender/action-copy",
                input: "encoded.mp4",
                output: "D:/Nexrender/encoded.mp4"
            }
        ]
    }
}

const main = async () => {
    const result = await render(job,{
        logger: console,
        binary: 'D:/Adobe/Adobe After Effects 2022/Support Files/aerender.exe',
        workpath: "D:/Nexrender/temp",
        skipCleanup: false,
        debug: true
    });
    
}

main().catch(console.error);