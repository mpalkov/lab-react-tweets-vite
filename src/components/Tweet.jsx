import Actions from "./Actions";
import Message from "./Message";
import Profileimage from "./ProfileImage";
import TimeStamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  return (
    <div className="tweet">
      <Profileimage image={props.tweet.user.image} />
      
      <div className="body">
        <div className="top">
          <User props={props.tweet.user} />
          <TimeStamp time={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
