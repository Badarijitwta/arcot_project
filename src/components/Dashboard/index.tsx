import "./dashboard.css";
import ChartWrapper from "../chartWrapper";

function Dashboard() {
  //I created mock API server in Postman
  // const [aiData, setAiData] = useState<Data | null>(null);

  // useEffect(() => {
  //   // Load the JSON data from the file
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get<Data>(
  //         "https://799764ef-5d51-4f5c-b382-fd135eadbdbd.mock.pstmn.io/api/data"
  //       );
  //       setAiData(response.data);
  //       // setAiData(response);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();

  //   return () => {
  //     console.log("This is cleanUp");
  //   };
  // }, []);
  // console.log(aiData);

  return (
    <div className="dashboard-main">
      <h2>Dashboard</h2>
      <div className="chart-wrapper">
        <ChartWrapper />
      </div>
      <div className="dashboard-image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,0L45,224L90,96L135,160L180,96L225,0L270,96L315,128L360,64L405,192L450,256L495,128L540,32L585,160L630,160L675,96L720,32L765,320L810,192L855,32L900,32L945,160L990,256L1035,288L1080,192L1125,160L1170,288L1215,256L1260,256L1305,128L1350,64L1395,192L1440,0L1440,320L1395,320L1350,320L1305,320L1260,320L1215,320L1170,320L1125,320L1080,320L1035,320L990,320L945,320L900,320L855,320L810,320L765,320L720,320L675,320L630,320L585,320L540,320L495,320L450,320L405,320L360,320L315,320L270,320L225,320L180,320L135,320L90,320L45,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Dashboard;
