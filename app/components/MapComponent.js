import Card from "./Card";
import { useMediaQuery } from "@mui/material";

const MapComponent = ({}) => {
  const notPc = useMediaQuery("(max-width: 800px)");
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(-74.342743);
  const [lat, setLat] = useState(40.6398097);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
      maxZoom: 20,
      minZoom: 6,
      cooperativeGestures: true,
    });
  }, [lat, lng, zoom]);

  return <Card height={"50vh"}></Card>;
};
