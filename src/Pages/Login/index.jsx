import React, {useState, useContext} from "react";
import Header from "../../Components/Header";
import Api from "../../Api/api";
import { AuthContext } from "../../contexts/auth";
<<<<<<< main
=======
import logo from "../../../public/images/logo-v2.png"
import Fade from 'react-reveal/Fade';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Input from "../../Components/TextField"
import NewSignUp from "../newSignUp";

>>>>>>> local

const urlRegister = 'https://ajudajaapi.herokuapp.com/api/public/login'

const FormLogin = () => { 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {authenticated, login} = useContext(AuthContext)
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e) => { 
        e.preventDefault()
        login(email, password)
        
    }

    return (
        <>
<<<<<<< main
            <Header/>
            <div className="w-[100w] h-[100vh] pt-32 bg-white">
                <div className="m-w-[1020px]">
=======
        
            <div className="w-[100w] h-[100vh] bg-gradient-to-t from-navFontColor to-firstSessionFontColor  md:from-white md:to-white">
                <div className="grid grid-cols-1 md:grid-cols-2 h-[100vh]">

                        <div className="hidden md:block bg-gradient-to-t from-navFontColor to-firstSessionFontColor drop-shadow-lg pl-10 pt-20">
                       <Fade left>
                           <div className="mt-32 m-auto relative">
                           
                               <h2 className="font-bold text-white text-6xl px-4 pb-3 drop-shadow-md">Saia de casa  </h2>
                           
                                <h2 className="font-medium text-white px-4 pb-2 text-5xl drop-shadow-md">
                                    sem se
                                    preocupar com
                                </h2>
                                <h2 className="font-bold px-4 lg:pl-48  text-[#9EFFBB] drop-shadow-md text-7xl">
                                o amanhã!
                                </h2>
                           </div>
                       </Fade>
                        </div>

                {success ? null : <Fade right>
                        <div className="box bg-[#fff] w-[370px] lg:w-[500px] md:w-[370px] md:mx-auto md:h-[390px] m-auto flex flex-col gap-5 rounded-lg shadow-md p-10">
                            <div className="flex justify-between items-center">
                                <h1 className="text-lg font-bold">Bem-vindo, faça seu login!</h1>
                                <img className="w-[120px]" src={logo} alt="" />
                            </div>
                           

                            <Input label="Insira seu email" type='email' info={email} onKeyUp={keyHandler} handleChange={handleChangeEmail} />
                            <Input label="Insira sua senha"  type='password' info={password} onKeyUp={keyHandler} handleChange={handleChangePassword} />
                          

                          
                            <div className="">
                            <a onClick={e => setSuccess(true)} className="hover:underline text-sm" >Esqueceu sua senha?</a>
                                <button onClick={handleSubmit} className="my-4 w-[100%] px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border  hover:text-navFontColor hover:border ">Entrar</button>
                        
                                <a className="hover:underline" href="/singup">Não tem cadastro? <strong>Cadastre-se agora!</strong></a>
                            </div>
                        
                            </div>
                    </Fade>
                }
                    
                    
                   {
                    success ?    <Fade right>
                    <div className="box bg-[#fff] w-[370px]  md:w-[370px] md:mx-auto lg:w-[500px]  h-[340px] m-auto flex flex-col gap-5 rounded-lg shadow-md p-10">
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg font-bold">Recupere sua senha</h1>
                            <img className="w-[120px]" src={logo} alt="" />
                        </div>
                        <p>Coloque seu e-mail cadastrado</p>
                        <Input type="email" info={email} onKeyUp={newPasswordKey} handleChange={handleChangeEmail} label="Insira seu e-mail"/>
                      
                        <div className="">
                        
                            <button onClick={newPassword} className="my-4 mb-7 w-[100%] px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border  hover:text-navFontColor hover:border ">Recuperar Senha</button>
                            <a onClick={e => setSuccess(false)} className=" hover:underline text-md" > <ArrowLeftIcon />Voltar </a>
                           
                        </div>
>>>>>>> local
                    
                    <div className="box bg-[#fff] w-[500px] h-[270px] m-auto flex flex-col gap-5 rounded-lg shadow-md p-10">
                        <h1 className="text-lg font-bold">Faça seu login!</h1>
                        <input className="border-b-2" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <input className="border-b-2" placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <div>
                            <button onClick={handleSubmit} className="my-4 px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border  hover:text-navFontColor hover:border ">Login</button>
                                                <button className="ml-2 border px-8 py-2 rounded-lg text-navFontColor font-bold  hover:bg-navBg hover:text-white "><a href="/singup">Cadastrar</a></button>
                        </div>
                        </div> 
                   
                </div>

            </div>
        </>

        
    )
}

export default FormLogin