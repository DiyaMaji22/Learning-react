import React from 'react'

const form = () => {
    const [formData,setFormData] = React.useState({
        email:"",
        password:""
    })
    const [errors,setErrors] = React.useState({});
    

    const validateEmail=(email)=>{
        const emailReggex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailReggex.test(email);
    };
    const validate=()=>{
        const newErrors={};
        if(!formData.email){
            newErrors.email="email is required"

        }else if(!validateEmail(formData.email)){
            newErrors.email="Please enter a valid email address";
        }

        if(!formData.password){
            newErrors.password="Password is required"
        }else if(formData.password.length<6){
            newErrors.password="Password must be atleast 6 characters"
        }
        return newErrors;
        
    }
    const handleChange=(e)=>{
        const {name,value}=e.target;

        setFormData(prev=>({
            ...prev,
            [name]:value
        }))
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        const validationErrors=validate();
        setErrors(validationErrors);
        if(Object.keys(validationErrors).length==0){
            console.log("Form submitted succesfully");
            console.log("User Data",formData);
            console.log("Email: ",formData.email);
            console.log("Password: ",formData.password);

        alert("Login succesfull");
        setFormData({
            email:"",
            password:""
        })
        setErrors({});
        }else{
            console.log("Form has errors",validationErrors);
        }
        

    }
  return (
    <div className="p-4">
        <h1 className="text-2xl mb-4">This is a login Form</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block mb-2">Email:</label>
                <input 
                    type="text" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-2">Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
        </form>
    </div>
  )
}

export default form