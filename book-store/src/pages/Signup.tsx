import { useForm } from "react-hook-form";
import styled from "styled-components";
import Title from "../components/common/Title";
import InputText from "../components/common/inputText";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../api/auth.api";


export interface SignupProps{
    email: string;
    password: string;
}


function Signup() {
    const Navigate = useNavigate();
//   const [email, setEmail] = useState(""); // 이메일 상태 선언
//   const [password, setPassword] = useState(""); // 비밀번호 상태 선언

//   const handleSubmit = (event : React.FormEvent<HTMLFormElement>)=>{
//     event.preventDefault();
//   }

const { register,
     handleSubmit, 
    formState:{errors},
} = useForm<SignupProps>();

const onSubmit = (data:SignupProps)=>{
    signup(data).then((res) => {
        //성공
        window.alert('회원가입이 완료되었습니다.');
        Navigate('/login');
    });
}

  return (
    <>
      <Title size="large">회원가입</Title>
      <SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText
              placeholder="이메일"
              inputType="email"
              {...register("email", { required: true})}
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)} // 이메일 값 변경
            />
            {errors.email && <p 
            className="error-text">이메일을 입력해주세요.</p>}
          </fieldset>
          <fieldset>
            <InputText
              placeholder="비밀번호"
              inputType="password"
              {...register("password", { required: true})}
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)} // 비밀번호 값 변경
            />
            {errors.password && <p 
            className="error-text">비밀번호를 입력해주세요.</p>}
          </fieldset>
          <fieldset>
            <Button type="submit"size="medium" scheme="primary">
              회원가입
            </Button>
          </fieldset>
          <div className="info">
            <Link to="/reset">비밀번호 초기화</Link>
          </div>
        </form>
      </SignupStyle>
    </>
  );
}

export const SignupStyle = styled.div`
  max-width: ${({ theme }) => theme.layout.width.small};
  margin: 80px auto;

  fieldset {
    border: 0;
    padding: 0 0 8px 0;
    .error-text {
      color: red;
    }
  }

  input {
    width: 100%;
  }

  button {
    width: 100%;
  }

  .info {
    text-align: center;
    padding: 16px 0 0 0;
  }
`;

export default Signup;
