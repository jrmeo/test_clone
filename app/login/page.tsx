'use client';

import style from './login.module.css';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import logo from '../../public/logo_aduOrg.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { supabase } from '../client';
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) {
        alert(error.message); 
      } else {
        alert('Successfully Logged In!');
        // Redirect the user after successful login
        router.push('/organization_feed');
      }
    } catch (error) {
      alert('An error occurred while logging in.'); 
    }
  }
  return (
    <div className={style.container}>
      <div className={style.logo_box}>
        <Image
          src={logo}
          width={500}
          height={500}
          alt="Logo of Adu Org"
          className={style.logo_design}
        />
      </div>

      <div className={style.login_box}>
        <Image
          src={logo}
          width={200}
          height={200}
          alt="Logo of Adu Org"
        />
        <h4 className={style.login_quote}>GROWING IN ADAMSON IS BETTER WITH ORGANIZATION.</h4>
        <form className={style.form_design} onSubmit={handleSubmit}>
          <div className={style.tf_box}>
            <TextField
              label="AdU Email Address"
              variant="filled"
              type="email"
              className={style.login_tf}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              className={style.login_tf}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className={style.helper}>
            <FormControlLabel control={<Checkbox defaultChecked className={style.cb_design} />} label="Always Remember?" />
            <Link href=''>Forgot Password?</Link>
          </div>

          <div className={style.button_grp}>
            <Button type="submit" variant="contained" className={style.button_design}>
              SIGN IN
            </Button>
            <Link href="/signup">No account? Click here.</Link>
          </div>
        </form>
      </div>
    </div>
  );
}