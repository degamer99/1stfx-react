import React, { useState} from "react";

const formArray =[
        [{
            id: 'create',
            h2: 'Create An Account',
            input: [
                {
                    nameId: 'first',
                    type: 'text',
                    placeholder: 'Enter First Name',
                    txt: 'First Name'
                },
                {
                    nameId: 'last',
                    type: 'text',
                    placeholder: 'Enter Last Name',
                    txt: 'Last Name'
                },
                {
                    nameId: 'email',
                    type: 'email',
                    placeholder: 'name@example.com',
                    txt: 'Email Address'
                },
                {
                    nameId: 'phone',
                    type: 'text',
                    placeholder: '09012345678',
                    txt: 'Phone Number'
                },
                {
                    nameId: 'password',
                    type: 'password',
                    placeholder: 'Password',
                    txt: 'Password'
                },
                {
                    nameId: 'comfirm',
                    type: 'password',
                    placeholder: 'Confirm Password',
                    txt: 'Confirm Password'
                },
            ],
            btn: 'Register',
            footer: 'Already have an account?',
            a: 'Sign In',
            copyright: 'Copyright 2022 1stfx.com All Rights Reserved'
        }],
        [{
            id: 'login',
            h2: 'User Login',
            input: [
                {
                    nameId: 'email',
                    type: 'email',
                    placeholder: 'name@example.com',
                    txt: 'Email Address'
                },
                {
                    nameId: 'password',
                    type: 'password',
                    placeholder: '.........',
                    txt: 'Password'
                },
            ],
            btn: 'Log In',
            footer: 'Already have an account?',
            a: 'Sign Up',
            copyright: 'Copyright 2022 1stfx.com All Rights Reserved'
        }],
        [{
            id: 'reset',
            h2: 'Reset Password',
            input: [],
            btn: 'Reset',
            footer: 'Already have an account?',
            a: 'Sign In',
            copyright: 'Copyright 2022 1stfx.com All Rights Reserved'
        }]
    
    ];

const Heading = () => {
    return <header className='formheading'>
        <h1 className="logo">1st<span>fx</span></h1>
    </header>
}
function Form (){
    const [form, setForm] = useState(formArray[0]);
    const change = (id) => {switch (id){
        case "create":
            setForm(formArray[1])
            break;
        case "login":
            setForm(formArray[0])
            break;
        case "reset":
            setForm(formArray[1])
            break;
    }}
    console.log(form);
    const Allform = () => {
        return(
            <main className='themainform'>
                    {
                        form.map(({id,h2, input, btn, footer,a,  copyright}) => {
                            return(<form key={id} className='theform'>
                                <h2>{h2}</h2>
                                {
                                    input.map(({nameId, type, placeholder, txt}) => {
                                        return(<div key={nameId}>
                                            <label htmlFor={nameId}>{txt}</label>
                                            <input name={nameId} type={type} placeholder={placeholder}/>
                                            <br />
                                        </div>
                                        );
                                    })
                                }
                                <button><b>{btn}</b></button>
                                <footer>
                                    <p>{footer} <a href='#' onClick={ ()=> change(id)}>{a}</a></p>
                                    <hr />
                                    <p> &copy; {copyright}</p>
                                </footer>
                                </form>
                            );
                        })
                    }
            </main>
        );
    }
    
    return(<>
        <Heading />
        <Allform />
        </>
    );
}

export default Form;