type Log = Warning | Info | Success

// El TYPE es diferente en todas las "interfaces"
// Pero, tienen el mismo nombre de propiedad
interface Warning {
    type: "warning"; // Union discriminada
    msg: string;
}

interface Info {
    type: "info";  // Union discriminada
    text: string
}

interface Success {
    type: "success";  // Union discriminada
    message: string;
}


// Utilizamos el "switch" para poder obtener la propiedad de cada una de las "interfaces"
function handleMessage(log: Log) {
    switch(log.type){
    case "warning":
        console.log(log.msg)
        break

    case "info":
        console.log(log.text)
        break
        
    case "success":
        console.log(log.message)
        break    
}
}
