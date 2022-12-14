import React from 'react';
import DoctorGirl from '/images/doctor-girl.svg';
import DoctorMan from '/images/doctor-man.svg';
import Fade from 'react-reveal/Fade';

export default function Information({ id }) {
  const contentClass =
    ' m-2.5 flex flex-col sm:flex-row md:flex-row justify-center items-center gap-1 sm:gap-10 animation-toRight  ';
  const contentClassReverse =
    ' m-2.5 flex flex-col sm:flex-row-reverse md:flex-row-reverse justify-center items-center gap-1 sm:gap-10 ';
  const svgImage =
    'flex justify-self-center w-20 sm:w-24 transform hover:scale-110 transition duration-300';
  const firstBox =
    'm-2.5 bg-firstBoxBg rounded-input p-2.5 sm:w-[50rem] sm:text-xl shadow-md transform hover:scale-95 transition duration-300';
  const secondBox =
    'm-2.5 sm:m-0 bg-secondBoxBg p-2.5 rounded-input sm:w-[50rem] sm:text-xl shadow-md transform hover:scale-95 transition duration-300 ';

  return (
    <div id={id} className="w-[100%] pt-20">
      <Fade left>
        <div className={contentClass}>
          <div className={svgImage}>
            <img src={DoctorGirl} alt="" />
          </div>
          <div className={firstBox}>
            <p>
              O Ajuda.JÁ é um projeto que tem como objetivo ajudar pessoas que
              possuem alguma(s) condição(ões) de saúde, e correm algum risco no
              dia-a-dia, as pessoas poderão ter acesso as informações que você
              escolher para evitar problemas de mal manuseio de medicamentos, ou
              algum problema com alguma alergia a algum tratamento, substancia
              ou medicmanto.
            </p>
          </div>
        </div>
      </Fade>

      <Fade right>
        <div className={contentClassReverse}>
          <div className={svgImage}>
            <img src={DoctorMan} alt="" />
          </div>

          <div className={secondBox}>
            <p>
              Profissionais de saúde poderão prosseguir com o atendimento e com
              o procedimento de rua sem se preocupar com o alguma alergia,
              sindrome ou algo relacionado que o paciente pode ou não ter em seu
              corpo
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
