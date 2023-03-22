import { useEffect } from "react";

function Zoom(props) {
  useEffect(() => {
    document.body.style.zoom = props.zoom;
  }, [props.zoom]);

  return null;
}

export default Zoom;
