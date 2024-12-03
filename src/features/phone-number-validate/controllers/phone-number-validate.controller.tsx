import React from 'react';
import {useForm} from 'react-hook-form';
import {FormFields} from '../types/phone-number-validate.type';
import {PhoneNumberValidateView} from '../views/phone-number-validate.view';

export const PhoneNumberValidateController = () => {
  const {
    control,
    formState: {errors},
  } = useForm<FormFields>({
    mode: 'onChange',
  });

  return <PhoneNumberValidateView control={control} errors={errors} />;
};
