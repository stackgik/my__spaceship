function my_spaceship(flight_path){
    let final_location ={
        x: 0,
        y: 0,
        direction: 'up'
    }

    if(flight_path === ''){
        return (`{x: ${final_location.x}, y: ${final_location.y}, direction: ${final_location.direction}}`);
    }

    for(let i = 0; i < flight_path.length; i++){
        if(flight_path[i] === 'R'){
            turn_right(final_location)
        }else if(flight_path[i] === 'L'){
            turn_left(final_location)
        }else if(flight_path[i] === 'A'){
            advance(final_location)
        }
    }

    return (`{x: ${final_location.x}, y: ${final_location.y}, direction: '${final_location.direction}'}`);
}         

let testing = my_spaceship('RAARA');
console.log(testing);

function turn_right(final_location){
    if(final_location.direction === 'up'){
        final_location.direction = 'right'
    }else if(final_location.direction === 'right'){
        final_location.direction = 'down'
    }else if(final_location.direction === 'down'){
        final_location.direction = 'left'
    }else if(final_location.direction === 'right'){
        final_location.direction = 'up'
    }
}

function turn_left(final_location){
    if(final_location.direction === 'up'){
        final_location.direction = 'left'
    }else if(final_location.direction === 'right'){
        final_location.direction = 'up'
    }else if(final_location.direction === 'down'){
        final_location.direction = 'right'
    }else if(final_location.direction === 'left'){
        final_location.direction = 'down'
    }
}

function advance(final_location){
    if(final_location.direction === 'up'){
        final_location.y -= 1;
    }else if(final_location.direction === 'down'){
        final_location.y += 1;
    }else if(final_location.direction === 'right'){
        final_location.x += 1;
    }else if(final_location.direction === 'right'){
        final_location.x -= 1;
    }
}