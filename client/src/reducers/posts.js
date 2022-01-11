export default (posts = [], action) => {
    // if(action.type === 'CREATE'){
    //     return 
    // }
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        default:
            break;
    }
}