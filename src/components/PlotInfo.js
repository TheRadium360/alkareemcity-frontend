import React from "react";
import { FormHeading } from "./FormHeading";
import Api from "../Api";
import { useState , useEffect } from "react";
import InfoHeading from "./InfoHeading";


export default function () {
    const [plotInfo, setPlotInfo] = useState({});
    const handlePlotInfo = async()=>{
      const res = await Api.get('plots/622f3349f088ee85e7297129')
      setPlotInfo(res.data.data)
    }
    useEffect(() => {
      handlePlotInfo();
    }, []);
  return (
    <div>
        <FormHeading value="Plot info"/>
      <div className="row mx-auto mb-4" style={{width:"45rem"}}>
        <div className="col-4 "><InfoHeading heading='Plot Number : ' value={plotInfo.plotNo}/></div>
        <div className="col-4 "><InfoHeading heading='Plot Block : ' value={plotInfo.block}/></div>
        <div className="col-4 "><InfoHeading heading='Plot location : ' value={`${plotInfo.lat}° , ${plotInfo.lng}°`}/></div>
      </div>
      <div className="row mb-4 mx-auto" style={{width:"45rem"}}>
      <div className="col-4 "><InfoHeading heading='Plot Price : ' value={plotInfo.plotPrice}/></div>
      <div className="col-4 "><InfoHeading heading='Plot Area : ' value={plotInfo.plotArea}/></div>
      <div className="col-4 "><InfoHeading heading='Plot Type : ' value={plotInfo.plotType}/></div>
      </div>
     
    </div>
  );
}
