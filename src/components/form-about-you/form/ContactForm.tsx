import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AddFile from './../../../assets/icons/add-file.svg?react';

type FormValues = {
  fullName: string;
  email: string;
  yourMessage: string;
  agree: boolean;
  file?: File | null;
};

export const ContactForm: React.FC = () => {
  const maxSize = 5 * 1024 * 1024; // 5 MB
  const allowedFormats = [
    'text/plain',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data);
    reset();
    setSelectedFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;

    const file = files[0];

    if (!allowedFormats.includes(file.type)) {
      alert('Invalid file type');
      e.target.value = '';
      return;
    }

    if (file.size > maxSize) {
      alert('File size must be <= 5 MB');
      e.target.value = '';
      return;
    }

    setSelectedFile(file);
    setValue('file', file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setValue('file', null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label
          htmlFor="fullName"
          className="text-[12px] text-[#8F8D81] md:text-base"
        >
          Full Name*
        </label>
        <input
          id="fullName"
          type="text"
          {...register('fullName', { required: 'Full Name is required' })}
          className="mt-2 w-full border-b border-white py-1 text-base font-normal text-white outline-none md:text-xl"
        />
        {errors.fullName && (
          <p className="text-red-500">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-base text-[#8F8D81]">
          Email*
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
          className="mt-2 w-full border-b border-white py-1 text-xl font-normal text-white outline-none"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="yourMessage" className="text-base text-[#8F8D81]">
          Your Message*
        </label>
        <textarea
          id="yourMessage"
          {...register('yourMessage', {
            required: 'Message is required',
            minLength: {
              value: 30,
              message: 'Message must be at least 30 characters',
            },
          })}
          className="mt-2 w-full resize-none border-b border-white py-1 text-xl font-normal text-white outline-none"
          rows={5}
        />
        {errors.yourMessage && (
          <p className="text-red-500">{errors.yourMessage.message}</p>
        )}
      </div>

      <div>
        <label className="flex cursor-pointer items-center gap-2 text-white">
          <AddFile />
          <span className="text-base">
            Add an attachment, (txt, pdf, docx) up to 5 MB
          </span>
          <input type="file" onChange={handleFileChange} className="hidden" />
        </label>

        {selectedFile && (
          <div className="mt-2 flex items-center justify-start gap-2 px-7 text-white">
            <span className="text-[14px] leading-normal">
              {selectedFile.name}
            </span>
            <button
              type="button"
              onClick={removeFile}
              className="cursor-pointer font-bold text-red-500"
            >
              &times;
            </button>
          </div>
        )}

        {errors.file && <p className="text-red-500">{errors.file.message}</p>}
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-2 text-base text-white">
          <input
            className="mt-[4px] h-4 w-4"
            type="checkbox"
            {...register('agree', {
              required: 'You must agree to the processing of personal data',
            })}
          />
          I agree to the processing of my personal data*
        </label>
        {errors.agree && <p className="text-red-500">{errors.agree.message}</p>}
      </div>

      <button
        type="submit"
        className="mt-[40px] inline-block h-[46px] w-[133px] cursor-pointer items-center justify-center rounded-4xl border border-white bg-white p-4 text-base leading-0 text-black duration-300 hover:bg-transparent hover:text-white md:mt-[48px] md:h-[60px] md:w-[170px] md:text-xl"
      >
        Contact Us
      </button>
    </form>
  );
};
