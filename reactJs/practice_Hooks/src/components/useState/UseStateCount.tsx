import React, { useState } from "react";

export default function UseStateCount() {
  const [count, setCount] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
<<<<<<< HEAD:practice_Hooks/src/components/useState/UseStateCount.tsx
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{6,}$/;
=======
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{6,}$/;
>>>>>>> d74ef66782a25077deffc3776f5aa3400123db7f:practice_Hooks/src/components/UseStateCount.tsx
  const isValidPassword = passwordRegex.test(form.password);
  const isFormValid = form.name.trim() && isValidEmail && isValidPassword;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
<<<<<<< HEAD:practice_Hooks/src/components/useState/UseStateCount.tsx
    if (name === "password") {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{6,}$/;

      if (!regex.test(value)) {
        setTouched((prev) => ({
          ...prev,
          password: true,
        }));
=======
    if (name === "password"){
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{6,}$/ ;

      if(!regex.test(value)){
        setTouched((prev)=>({
          ...prev,
          password: true,
        }))
>>>>>>> d74ef66782a25077deffc3776f5aa3400123db7f:practice_Hooks/src/components/UseStateCount.tsx
      }
    }
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      setTouched({
        name: true,
        email: true,
        password: true,
      });

      return;
    }

    console.log("Submit", form);
    alert("Form submitted successfully!");
  };

  return (
    <>
      <h2 className="text-lg font-bold pt-2">UseState</h2>
      <div className="grid grid-cols-2 grid-row-2">
        <div className=" flex flex-col items-center p-10 border border-gray-300">
          <h2 className="text-2xl font-bold mt-4 text-left p-2 text-blue-500">
            Bài 1: Counter App
          </h2>
          <div>
            <p className="mb-2">Number: {count}</p>

            <div className="flex flex-col gap-2 w-[300px]">
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Increase +
              </button>

              <button
                onClick={() => {
                  if (count > 0) setCount((prev) => prev - 1);
                }}
                disabled={count === 0}
                className="bg-green-500 text-white py-2 rounded hover:bg-green-600 disabled:bg-gray-300"
              >
                Decrease -
              </button>

              <button
                onClick={() => setCount(0)}
                className="bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------------------- */}
        <div className=" flex flex-col items-center p-10 border border-gray-300">
          <h2 className="text-2xl font-bold mt-4 text-left p-2 text-blue-500">
            Bài 2: Input Form
          </h2>
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 w-[300px]"
            >
              <label className="font-medium">Tên:</label>

              <input
                type="text"
                placeholder="Nhập tên của bạn"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="border p-2 rounded"
                onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
              />
              {touched.name && !form.name.trim() && (
                <p className="text-sm text-red-500 ">Please enter your name</p>
              )}
              <label className="font-medium">Email:</label>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                className="border p-2 rounded"
              />
              {touched.email && !form.email.trim() && (
                <p className="text-sm text-red-500 ">Please enter your email</p>
              )}
              {touched.email && form.email.trim() && !isValidEmail && (
                <p className="text-sm text-red-500 ">Email is not valid</p>
              )}
              <label className="font-medium">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={form.password}
                onChange={handleChange}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, password: true }))
                }
                className="border p-2 rounded"
              />
              {touched.password && !form.password.trim() && (
                <p className="text-sm text-red-500 ">
                  Please enter your password
                </p>
              )}

              {touched.password && form.password.trim() && !isValidPassword && (
<<<<<<< HEAD:practice_Hooks/src/components/useState/UseStateCount.tsx
                <p className="text-sm text-red-500 ">
                  Password is not valid. Password must have 6+ chars, uppercase,
                  lowercase, number, and special character
                </p>
=======
                <p className="text-sm text-red-500 ">Password is not valid. Password must have 6+ chars, uppercase, lowercase, number, and special character</p>
>>>>>>> d74ef66782a25077deffc3776f5aa3400123db7f:practice_Hooks/src/components/UseStateCount.tsx
              )}
              <button
                disabled={!isFormValid}
                className="bg-blue-400 text-white p-2 rounded-lg disabled:bg-gray-300 disabled:text-black"
              >
                Submit
              </button>
              {/* <div className="bg-amber-300 p-4">
                <p className="text-gray-700">Hello, {form.name}</p>
                <p className="text-gray-700">Your email is: {form.email}</p>
                <p className="text-gray-700">
                  Your password is: {form.password}
                </p>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
