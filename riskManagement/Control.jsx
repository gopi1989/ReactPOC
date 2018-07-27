import React from 'react';

class Control extends React.Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="controlModal" tabIndex="-1" role="dialog" aria-labelledby="controlModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="marginpopup"><label className="fontvalue">ADD CONTROLI</label></span><br/>
                                <span className="marginpopup2"><label className="fontlabel">Categoria di Rischio: CRO_1_1</label></span>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span><img className="width75" src="./assets/close_icon.svg"/></span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <ul className="nav nav-pills" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active completed-menu" data-toggle="pill" href="#generali">Generali</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link default-menu" data-toggle="pill" href="#descrizione">Descrizione</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link default-menu" data-toggle="pill" href="#adeguatezza">Adeguatezza</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link default-menu" data-toggle="pill" href="#costi">Costi/Effort</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link default-menu" data-toggle="pill" href="#efficacia">Efficacia</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link default-menu" data-toggle="pill" href="#conferma">Conferma</a>
                                    </li>
                                </ul>
                                <div className="border-navline"></div>
                                <div className="tab-content">
                                    <div id="generali" className="container tab-pane active"><br/>
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-lg-6 text-center">
                                                    <label className="fontlabel">Modello Controllo di Linea</label>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-lg-6 text-center">
                                                    <select className="form-control fontvalue">
                                                        <option>CRO_1 - Non Conformità</option>
                                                        <option>MRO_1 - Non Conformità</option>
                                                        <option>NRO_1 - Non Conformità</option>
                                                        <option>PRO_1 - Non Conformità</option>
                                                        <option>DRO_1 - Non Conformità</option>
                                                    </select>
                                                    <span><img src="./assets/dropdown_down.svg" className="dropdownicon-align"/></span>
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-md-6 col-sm-6 col-lg-6 text-center">
                                                    <label className="fontlabel">Finalità controllo</label>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-lg-6 text-center">
                                                    <select className="form-control fontvalue">
                                                        <option>CRO_1 - Non Conformità</option>
                                                        <option>MRO_1 - Non Conformità</option>
                                                        <option>NRO_1 - Non Conformità</option>
                                                        <option>PRO_1 - Non Conformità</option>
                                                        <option>DRO_1 - Non Conformità</option>
                                                    </select>
                                                    <span><img src="./assets/dropdown_down.svg" className="dropdownicon-align"/></span>
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-md-6 col-sm-6 col-lg-6 text-center">
                                                    <label className="fontlabel">Tipologia Controllo di Linea</label>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-lg-6 text-center">
                                                    <select className="form-control fontvalue">
                                                        <option>CRO_1 - Non Conformità</option>
                                                        <option>MRO_1 - Non Conformità</option>
                                                        <option>NRO_1 - Non Conformità</option>
                                                        <option>PRO_1 - Non Conformità</option>
                                                        <option>DRO_1 - Non Conformità</option>
                                                    </select>
                                                    <span><img src="./assets/dropdown_down.svg" className="dropdownicon-align"/></span>
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-md-6 col-sm-6 col-lg-6 text-center">
                                                    <label className="fontlabel">Frequenza Controllo di Linea</label>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-lg-6 text-center">
                                                    <select className="form-control fontvalue">
                                                        <option>CRO_1 - Non Conformità</option>
                                                        <option>MRO_1 - Non Conformità</option>
                                                        <option>NRO_1 - Non Conformità</option>
                                                        <option>PRO_1 - Non Conformità</option>
                                                        <option>DRO_1 - Non Conformità</option>
                                                    </select>
                                                    <span><img src="./assets/dropdown_down.svg" className="dropdownicon-align"/></span>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="descrizione" className="container tab-pane fade"><br/>
                                        <div className="container-fluid">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <label className="fontlabel">Discrizione Controllo di Linea</label>
                                                <textarea className="form-control fontvalue" rows="5" id="comment"></textarea>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btnsecondary">Back</button>
                                                <button type="button" className="btn btn-primary">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="adeguatezza" className="container tab-pane fade"><br/>
                                        <div className="container-fluid">
                                            <h5 className="fontlabel">Il controllo è coerente il fa]ore di rischio scenario?</h5>
                                            <div className="form-check">
                                                <label className="form-check-label fontvalue containerradio">
                                                    <input type="radio" className="form-check-input" name="optradio" />
                                                       Si
                                                    <span className="checkmarkradio"></span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label fontvalue containerradio">
                                                    <input type="radio" className="form-check-input" name="optradio" />
                                                    No
                                                    <span className="checkmarkradio"></span>
                                                </label>
                                            </div>
                                            <h5 className="mTop20 fontlabel">Il controllo è stato disegnato in modo tale da individuare anche gil scenari estremamente anomali/ad alto impa]o e bassa probabilità?</h5>
                                            <div className="form-check">
                                                <label className="form-check-label fontvalue containerradio">
                                                    <input type="radio" className="form-check-input" name="optradio" />
                                                    Si
                                                    <span className="checkmarkradio"></span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label fontvalue containerradio">
                                                    <input type="radio" className="form-check-input" name="optradio" />
                                                    Li individua ma occorrono ulteriori azioni per mi6gare effeZvamente
                                                    <span className="checkmarkradio"></span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label fontvalue containerradio">
                                                    <input type="radio" className="form-check-input" name="optradio" />
                                                    Il controllo è disegnato per mitigare solo i casi maggiormente frequenti
                                                    <span className="checkmarkradio"></span>
                                                </label>
                                            </div>
                                            <h5 className="mTop20 fontlabel">Il controllo è automanzzatto?</h5>
                                            <div className="form-check">
                                                <label className="form-check-label fontvalue containerradio">
                                                    <input type="radio" className="form-check-input" name="optradio" />
                                                    Si
                                                    <span className="checkmarkradio"></span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label fontvalue containerradio">
                                                    <input type="radio" className="form-check-input" name="optradio" />
                                                    Manuale ma facilmente replicabile
                                                    <span className="checkmarkradio"></span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label fontvalue containerradio">
                                                    <input type="radio" className="form-check-input" name="optradio" />
                                                    Manuale e molto ar6colato
                                                    <span className="checkmarkradio"></span>
                                                </label>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btnsecondary">Back</button>
                                                <button type="button" className="btn btn-primary">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="costi" className="container tab-pane fade"><br/>
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-10 col-sm-10 col-lg-10 text-left">
                                                    <label className="fontlabel">Quanto FTE (dirigen6) sono dedica6 all’ esecuzione del controllo?</label>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-lg-2 text-center">
                                                    <input type="text" className="form-control fontvalue text-right" />
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-md-10 col-sm-10 col-lg-10 text-left">
                                                    <label className="fontlabel">Quanti FTE (quadri) sono dedica6 all’ esecuzione del controllo?</label>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-lg-2 text-center">
                                                    <input type="text" className="form-control fontvalue text-right" />
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-md-10 col-sm-10 col-lg-10 text-left">
                                                    <label className="fontlabel">Quanti FTE (impiega6) sono dedica6 all’ esecuzione del controllo?</label>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-lg-2 text-center">
                                                    <input type="text" className="form-control fontvalue text-right" />
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-md-10 col-sm-10 col-lg-10 text-left">
                                                    <label className="fontlabel">Quanti sono i cos6 per licenze (su base annuale) lega6 all’ implementazione /esecuzione
                                                        del controllo?</label>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-lg-2 text-center">
                                                    <input type="text" className="form-control fontvalue text-right" />
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-md-10 col-sm-10 col-lg-10 text-left">
                                                    <label className="fontlabel">Quanti sono i cos6 di sviluppo informa6co per implementare / eseguire il controllo?</label>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-lg-2 text-center">
                                                    <input type="text" className="form-control fontvalue text-right" />
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-md-10 col-sm-10 col-lg-10 text-left">
                                                    <label className="fontlabel">Quanti sono gil eventuali altri cos6 fissi (su base annuale) lega6 al’implementazione /
                                                        esecuzione del controllo?</label>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-lg-2 text-center">
                                                    <input type="text" className="form-control fontvalue text-right" />
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-md-10 col-sm-10 col-lg-10 text-left">
                                                    <label className="fontlabel">Costi/Effort Total</label>
                                                </div>
                                                <div className="col-md-2 col-sm-2 col-lg-2 text-center">
                                                    <label className="totalvalue">0.00&nbsp;&nbsp;&euro;</label>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btnsecondary">Back</button>
                                                <button type="button" className="btn btn-primary">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="efficacia" className="container tab-pane fade"><br/>
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                    <label className="fontvalue">MITIGAZIONE FREQUENZA</label>
                                                </div>
                                                <div className="col-sm-3 col-md-3 col-lg-3 text-center">
                                                    <button type="button" className="btn btnred">Controllo non efficace</button>
                                                </div>
                                            </div>
                                            <h5 className="fontlabel mTop30">Il controllo individua esclusivamente gil even6 estremamente anomali (alto impa]o e bassa frequenza)?</h5>
                                            <div className="form-check">
                                                <label className="form-check-label fontvalue containerradio">
                                                    <input type="radio" className="form-check-input" name="optradio" />
                                                    Si
                                                    <span className="checkmarkradio"></span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label fontvalue containerradio">
                                                    <input type="radio" className="form-check-input" name="optradio" />
                                                    No
                                                    <span className="checkmarkradio"></span>
                                                </label>
                                            </div>
                                            <h5 className="fontlabel mTop20">Il controllo è completamente automa6zzato?</h5>
                                            <div className="form-check">
                                                <label className="form-check-label fontvalue containerradio">
                                                    <input type="radio" className="form-check-input" name="optradio" />
                                                    Si
                                                    <span className="checkmarkradio"></span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label fontvalue containerradio">
                                                    <input type="radio" className="form-check-input" name="optradio" />
                                                    No
                                                    <span className="checkmarkradio"></span>
                                                </label>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btnsecondary">Back</button>
                                                <button type="button" className="btn btn-primary">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="conferma" className="container tab-pane fade"><br/>
                                        <div className="container-fluid">
                                            <div className="row">
                                               <div className="col-sm-4 col-md-4 col-lg-4">
                                                    <label className="fontlabel">Modello Controllo di Linea</label>
                                               </div>
                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                    <label className="fontvalue">CL_1.3 - Autorizzazione per sistemazione delle disposizioni errate</label>
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-sm-4 col-md-4 col-lg-4">
                                                    <label className="fontlabel">Tipologia controllo di Linea</label>
                                                </div>
                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                    <label className="fontvalue">Automatico</label>
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-sm-4 col-md-4 col-lg-4">
                                                    <label className="fontlabel">TFrequenza controllo di Linea</label>
                                                </div>
                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                    <label className="fontvalue">Giornaliero</label>
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-sm-4 col-md-4 col-lg-4">
                                                    <label className="fontlabel">Finalità Controllo</label>
                                                </div>
                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                    <label className="fontvalue">Mitigazione impatto</label>
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-sm-4 col-md-4 col-lg-4">
                                                    <label className="fontlabel">Descrizione</label>
                                                </div>
                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                    <p align="justify" className="fontvalue">It is a long established fact that a reader will be distracted by the readable
                                                        content of a page when looking at its layout. The point of using Lorem Ipsum
                                                        is that it has a more-or-less normal distribu6on of le]ers, as opposed to
                                                        using 'Content here, content here', making it look like readable English.</p>
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-sm-4 col-md-4 col-lg-4">
                                                    <label className="fontlabel">Adeguatezza</label>
                                                </div>
                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                    <button type="button" className="btn btngreen">Controllo Adeguato</button>
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-sm-4 col-md-4 col-lg-4">
                                                    <label className="fontlabel">Efficacia</label>
                                                </div>
                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                    <button type="button" className="btn btnyellow">Controllo parzialmente efficace</button>
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-sm-4 col-md-4 col-lg-4">
                                                    <label className="fontlabel">Costi/Effort</label>
                                                </div>
                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                    <label className="fontvalue">10,000.00&nbsp;&nbsp;&euro;</label>
                                                </div>
                                            </div>
                                            <div className="row mTop20">
                                                <div className="col-sm-4 col-md-4 col-lg-4">
                                                    <label className="fontlabel">Notes</label>
                                                </div>
                                                <div className="col-sm-8 col-md-8 col-lg-8">
                                                    <textarea className="form-control fontvalue" rows="5" id="comment"></textarea>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btnsecondary">Back</button>
                                                <button type="button" className="btn btn-primary">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Control;