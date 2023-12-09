
import "./navbar.css";
import axios from "axios"
const Navbar = () => {

  const onExportClick=async()=>{
    try{
     let response= await axios.get("http://localhost:8080/api/export")
     if (response.status === 200) {
      
      const exportedData = response.data;
      const blob = new Blob([exportedData], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'exportedLead.csv'; // Set the desired file name
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      console.log('Export successful');
    } else {
      // Handle the case where the server responded with an error
      console.error('Export failed. Server responded with:', response.status, response.statusText);
    }

    }catch(err){
      console.log('Export failed. Error:', err.message);
    }
  }

  return (
    <header className="navbar">
    <div className="brand">ABC Company</div>
    <nav>
      <ul>
        <li>
          <button onClick={onExportClick}>Export</button>
        </li>
        {/* Add more navigation items if needed */}
      </ul>
    </nav>
  </header>
  );
};

export default Navbar;
