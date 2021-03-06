import React from "react";
import logo from '../../img/logo_quem_somos.png';
import { useHistory } from "react-router";
import oficina01 from '../../img/foto01.jpg';
import oficina03 from '../../img/fot03.jpg';
import oficina02 from '../../img/foto02.jpg';
import oficina04 from '../../img/foto04.jpg';


export default function Sobre() {

  const history = useHistory()

  return (
    <section
      className="container-fluid h-100 setionHome"
      style={{
        backgroundColor: 'rgba(6, 36, 21, 0.78)'
      }}>
      <div
        className="container py-5" >
        <div
          className="row justify-content-center align-items-center h-100" >
          <div
            className="col col-xl-12 py-1" >
            <div
              role="main"
              className="card my-2 py-5"
              style={{
                borderRadius: '1rem',
                boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)',
                backgroundColor: '  rgba(350, 240, 190, 0.75)',
                padding: '2vw'
              }}>
              <div>
                <h2
                  className="h2 text-center"
                  style={{
                    fontFamily: 'Permanent Marker'
                  }}> Conheça o Auto Tech
                </h2>
              </div>
              <div
                className="row">
                <div
                  className="col-md-4">
                  <div
                    className="img py-3">
                    <img
                      src={oficina01}
                      className="figure-img img-fluid rounded float-start"
                      width="250vw"
                      alt="Responsive image" />
                  </div>
                </div>
                <div
                  className="col-md-4">
                  <div
                    className="img py-3 ms-5">
                    <img
                      src={logo}
                      className="figure-img img-fluid rounded float-center"
                      width="250vw"
                      alt="Responsive image" />
                  </div>
                </div>
                <div
                  className="col-md-4">
                  <div
                    className="img py-3">
                    <img
                      src={oficina03}
                      className="figure-img img-fluid rounded float-end"
                      width="250vw"
                      alt="Responsive image" />
                  </div>
                </div>
              </div>
              <div
                className="py-3">
                <blockquote
                  className="blockquote text-right">
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: 'Kanit'
                    }}>
                    “A maioria das pessoas não querem o seu produto. Elas querem a transformação que seu produto vai trazer para elas.”
                  </p>
                  <footer
                    className="blockquote-footer">
                    Érico Rocha
                    <cite
                      title="Source Title"> -
                      especialistas em marketing digital e empreendedorismo digital do Brasil
                    </cite>
                  </footer>
                </blockquote>
                <h5
                  className="h5 text-right"
                  style={{
                    fontFamily: 'Kanit'
                  }}>
                  Atualmente, o Auto Tech é uma realidade! Nosso software nasceu em 2021, dentro de uma oficina mecânica, com o objetivo de agilizar e melhorar os processos operacionais e administrativos.<br />
                  Uma plataforma web pensada em ajudar na gestão de empresas do setor de manutenção automotiva. Oferecemos as funcionalidades necessárias para facilitar o processo diário de oficinas. <br />
                  Nossa equipe está disposta a sempre buscar como compromisso a inovação e tecnologia para o mercado onde estamos inseridos.
                  Por isso, a todo momento nos preocupamos com a usabilidade e custo-benefício.</h5>
                <h3
                  className="h3 text-right"
                  style={{
                    fontFamily: 'Kanit',
                    fontWeight: 'bold'
                  }}>
                  Conheça o Auto Tech, e facilite sua gestão.
                </h3>
              </div>
              <div
                className="row">
                <div
                  className="col-md-4">
                  <div
                    className="img py-3">
                    <img
                      src={oficina02}
                      className="figure-img img-fluid rounded float-start"
                      width="250vw"
                      alt="Responsive image" />
                  </div>
                </div>
                <div
                  className="col-md-4">
                  <button
                    type="button"
                    className="d-grid btn btn-dark btn-xl my-5 mx-auto"
                    name="buttonVoltar"
                    onClick={() => history.push(`/home`)}
                    style={{
                      fontStyle: 'oblique',
                      fontWeight: 'bold'
                    }}> Home
                  </button>
                </div>
                <div
                  className="col-md-4">
                  <div
                    className="img py-3">
                    <img
                      src={oficina04}
                      className="figure-img img-fluid rounded float-end" width="250vw"
                      alt="Responsive image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <footer
          className="footer navbar-fixed-bottom text-center">
          <p
            className="pb-1"
            style={{
              textAlign: 'center',
              color: 'white'
            }}>&copy; 2022 autotech.com.br</p>
        </footer> */}
    </section>
  )
}