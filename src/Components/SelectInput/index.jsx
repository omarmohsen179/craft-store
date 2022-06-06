import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import './index.css'
import Select from 'react-select';

function SelectInput({name,handleChang,value,data=[],config={key:"Name",value:"Id"}}) {
  const { t, i18n } = useTranslation();
  return (
    <div style={{width:"100%"}}>
      <Select
        value={data.filter(e=>e[config.value]===value)[0]}
        getOptionLabel ={(option)=>option[config.key]}
        getOptionValue ={(option)=>option[config.value]}
        onChange={(e)=>{
          handleChang({name,value:e[config.value]})}}
        options={data}
   

      />
   </div>
  );
}

export default React.memo(SelectInput) ;
