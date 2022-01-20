import React, {useState} from 'react';

const Forms = ({getFilter}) => {
    let [form, setForm] = useState({name: '', username: '', email: ''});

    let formHendler = (e)=>{
        //console.log({...form});
        const eventData = {...form, [e.target.name]:e.target.value }
        //console.log(eventData);
        setForm({...form, ...eventData})
        getFilter(eventData)
    }
    
    return (
        <div>
            <form>
                <label>
                   Name:_<input type='text' name={'name'} value={form.name} onChange={formHendler}/>
                   _Username:_<input type='text' name={'username'} value={form.username} onChange={formHendler}/>
                   _Email:_<input type='text' name={'email'} value={form.email} onChange={formHendler}/>
                </label>
            </form>
        </div>
    );
};

export default Forms;