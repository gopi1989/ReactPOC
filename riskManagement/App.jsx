import React from 'react';
import Scenario from './Scenario.jsx';
import Control from './Control.jsx';

class App extends React.Component {

   render() {
      return (
         <div>

			<div className="container-fluid primaryheading">
				<div className="heading-align">Identification of Risk Scenarios</div>
			</div>

             <div className="container-fluid mTop50">
                 <div className="row">
                     <div className="col-sm-10 col-md-10 col-lg-10">
                        <label className="fontlabel">Nome del processo</label>
                        <input type="text" className="form-control fontvalue" />
                     </div>
                     <div className="col-sm-2 col-md-2 col-lg-2">
                         <button type="button" className="btn btn-default btnsecondary mTop30">Ricerca</button>
                     </div>
                 </div>
             </div>

             <div className="container-fluid mTop20">
                 <div className="row">
                     <div className="col-sm-6 col-md-6 col-lg-6">
                         <label className="fontlabel">Società di riferimento</label>
                         <input type="text" className="form-control fontvalue" />
                     </div>
                     <div className="col-sm-6 col-md-6 col-lg-6">
                         <label className="fontlabel">Owner del processo</label>
                         <input type="text" className="form-control fontvalue" />
                     </div>
                 </div>
             </div>

             <div className="container-fluid mTop20">
                 <div className="row">
                     <div className="form-group col-sm-6 col-md-6 col-lg-6">
                         <label className="control-label fontlabel" htmlFor="date">Data Riferimento</label>
                         <input className="form-control fontvalue" id="date" name="date" placeholder="MM/DD/YYY" type="text"/>
                         <span><img src="./assets/calendar_icon.svg" className="calendaricon-align"/></span>
                     </div>
                     <div className="form-group col-sm-6 col-md-6 col-lg-6">
                         <label className="control-label fontlabel" htmlFor="date">Data Compilazione</label>
                         <input className="form-control fontvalue" id="date" name="date" placeholder="MM/DD/YYY" type="text"/>
                         <span><img src="./assets/calendar_icon.svg" className="calendaricon-align"/></span>
                     </div>
                 </div>
             </div>

             <div className="container-fluid mTop20">
                 <div className="row">
                     <div className="col-sm-6 col-md-6 col-lg-6">
                         <label className="fontlabel">Operational Risk Category</label>
                         <select className="form-control fontvalue">
                             <option>CRO_1 - Non Conformità</option>
                             <option>MRO_1 - Non Conformità</option>
                             <option>NRO_1 - Non Conformità</option>
                             <option>PRO_1 - Non Conformità</option>
                             <option>DRO_1 - Non Conformità</option>
                         </select>
                         <span><img src="./assets/dropdown_down.svg" className="dropdownicon-align"/></span>
                     </div>
                     <div className="col-sm-6 col-md-6 col-lg-6">
                         <span className=""><img src="/assets/add_icon.svg" className="mTop30"/></span>
                     </div>
                 </div>
             </div>

             <div className="container-fluid mTop50">
                 <div className="row">
                     <div className="col-sm-3 col-md-3 col-lg-3 selectheading">
                         <label className="labelalign">CRO_1 - Non Conformità</label>
                     </div>
                     <div className="col-sm-6 col-md-6 col-lg-6">
                     </div>
                     <div className="col-sm-2 col-md-2 col-lg-2 text-right mL-5">
                         <button type="button" data-toggle="modal" data-target="#scenarioModal" className="btn btn-default mTop30 btn-addscenario">Add Scenario</button>
                     </div>
                 </div>
             </div>

             <div className="border-line"></div>

             <div id="accordion" className="panelalign">
                 <div className="card">
                     <div className="card-header collapsed" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                         <h5 className="mb-0">
                             <span><label className="fontvalue-accordion">CRO_1_1: Lorem Ipsum is simply dummy text of the prin6ng and typeseZng industry.</label></span>
                             <span>
                                 <img src="./assets/dropdown_up.svg" className="accordionalign" />
                             </span>
                         </h5>
                     </div>

                     <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                         <div className="card-body">
                             <div className="row">
                                 <div className="col-sm-10 col-md-10 col-lg-10">
                                    <span><img src="./assets/delete_icon.svg" className="deleteicon-align" /></span>
                                 </div>
                                 <div className="col-sm-2 col-md-2 col-lg-2">
                                     <button type="button" data-toggle="modal" data-target="#controlModal" className="btn btn-default btn-addscenario">Add Controli</button>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">Periodicità:</label></div>
                                     <div><label className="fontvalue">Frequente</label></div>
                                 </div>
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">Aggregazione Controlli per Frequenza:</label></div>
                                     <div><label className="fontvalue">Nessuno</label></div>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">Fattori di Rischio:</label></div>
                                     <div><label className="fontvalue">RU_01 - Incompetenza / Impreparazione professionale</label></div>
                                 </div>
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">Aggregazione Controlli per Impa]o:</label></div>
                                     <div><label className="fontvalue">Nessuno</label></div>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">Effecto:</label></div>
                                     <div><label className="fontvalue">EFF_06 - Write-Down</label></div>
                                 </div>
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">ET II:</label></div>
                                     <div><label className="fontvalue">ET_4.1 - Adeguatezza , Informa6va, riservatezza e rapporto fiduciario</label></div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="card">
                     <div className="card-header collapsed" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseOne">
                         <h5 className="mb-0">
                             <span><label className="fontvalue-accordion">CRO_1_2: Lorem Ipsum is simply dummy text of the prin6ng and typeseZng industry.</label></span>
                             <span data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseOne">
                                 <img src="./assets/dropdown_up.svg" className="accordionalign" />
                             </span>
                         </h5>
                     </div>
                     <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                         <div className="card-body">
                             <div className="row">
                                 <div className="col-sm-10 col-md-10 col-lg-10">
                                     <span><img src="./assets/delete_icon.svg" className="deleteicon-align" /></span>
                                 </div>
                                 <div className="col-sm-2 col-md-2 col-lg-2">
                                     <button type="button" data-toggle="modal" data-target="#controlModal" className="btn btn-default btn-addscenario">Add Controli</button>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">Periodicità:</label></div>
                                     <div><label className="fontvalue">Frequente</label></div>
                                 </div>
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">Aggregazione Controlli per Frequenza:</label></div>
                                     <div><label className="fontvalue">Nessuno</label></div>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">Fattori di Rischio:</label></div>
                                     <div><label className="fontvalue">RU_01 - Incompetenza / Impreparazione professionale</label></div>
                                 </div>
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">Aggregazione Controlli per Impa]o:</label></div>
                                     <div><label className="fontvalue">Nessuno</label></div>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">Effecto:</label></div>
                                     <div><label className="fontvalue">EFF_06 - Write-Down</label></div>
                                 </div>
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">ET II:</label></div>
                                     <div><label className="fontvalue">ET_4.1 - Adeguatezza , Informa6va, riservatezza e rapporto fiduciario</label></div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="card">
                     <div className="card-header collapsed" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseOne">
                         <h5 className="mb-0">
                             <span><label className="fontvalue-accordion">CRO_1_3: Lorem Ipsum is simply dummy text of the prin6ng and typeseZng industry.</label></span>
                             <span>
                                 <img src="./assets/dropdown_up.svg" className="accordionalign" />
                             </span>
                         </h5>
                     </div>
                     <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                          data-parent="#accordion">
                         <div className="card-body">
                             <div className="row">
                                 <div className="col-sm-10 col-md-10 col-lg-10">
                                     <span><img src="./assets/delete_icon.svg" className="deleteicon-align" /></span>
                                 </div>
                                 <div className="col-sm-2 col-md-2 col-lg-2">
                                     <button type="button" data-toggle="modal" data-target="#controlModal" className="btn btn-default btn-addscenario">Add Controli</button>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">Periodicità:</label></div>
                                     <div><label className="fontvalue">Frequente</label></div>
                                 </div>
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">Aggregazione Controlli per Frequenza:</label></div>
                                     <div><label className="fontvalue">Nessuno</label></div>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">Fattori di Rischio:</label></div>
                                     <div><label className="fontvalue">RU_01 - Incompetenza / Impreparazione professionale</label></div>
                                 </div>
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">Aggregazione Controlli per Impa]o:</label></div>
                                     <div><label className="fontvalue">Nessuno</label></div>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">Effecto:</label></div>
                                     <div><label className="fontvalue">EFF_06 - Write-Down</label></div>
                                 </div>
                                 <div className="col-sm-6 col-md-6 col-lg-6">
                                     <div><label className="fontlabel">ET II:</label></div>
                                     <div><label className="fontvalue">ET_4.1 - Adeguatezza , Informa6va, riservatezza e rapporto fiduciario</label></div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>


             <Scenario/>

             <Control/>

         </div>
      );
   }
}

export default App;
