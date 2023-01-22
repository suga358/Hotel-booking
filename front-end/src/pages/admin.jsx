import "./admin.css";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <div id="bk"></div>
      <div className="Admin-Portal">
        <div id="heading">
          <h1>Administration</h1>
        </div>

        <Link to="/entrybook" id="link1">
          Entry Book
        </Link>
  
      </div>
    </div>
  );
}
