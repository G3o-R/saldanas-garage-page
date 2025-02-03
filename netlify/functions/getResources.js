exports.handler = async (event, context) => {

    const services = {
        tints:{
            description:"custom tints keep your car cool even when it’s hot as hell...",


        },
        leds:{

        },
        wraps:{

        },
        decals:{

        }
    };

    // I'll figure out how to format this later
    

    return{
        statusCode: 200,
        body: JSON.stringify(page_components),
    };
};