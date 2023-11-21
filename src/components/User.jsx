const User = (props) => {

    const {name, handle} = props;
    //console.log(props.name, props.handle);
    return (
        <span className="user">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span> 
    );
};

export default User;