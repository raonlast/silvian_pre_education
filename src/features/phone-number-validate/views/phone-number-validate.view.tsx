import {Stack} from '@mobily/stacks';
import React from 'react';
import {Control, Controller, FieldErrors} from 'react-hook-form';
import {StyleSheet, Text, TextInput} from 'react-native';
import {FormFields} from '../types/phone-number-validate.type';
import {formatPhoneNumber} from '../utils/format-phone-number';

interface IPhoneNumberViewProps {
  control: Control<FormFields, any>;
  errors: FieldErrors<FormFields>;
}

export const PhoneNumberValidateView = ({
  control,
  errors,
}: IPhoneNumberViewProps) => {
  return (
    <Stack style={styles.container} space={4} padding={4}>
      <Text style={styles.label}>핸드폰 번호</Text>
      <Controller
        control={control}
        name="phoneNumber"
        rules={{
          pattern: {
            value: /^010-\d{4}-\d{4}$/,
            message: '전화번호를 정확하게 입력해 주세요',
          },
        }}
        render={({field: {onBlur, onChange, value}}) => (
          <TextInput
            style={[styles.input, errors.phoneNumber && styles.inputError]}
            placeholder="010-0000-0000"
            onBlur={onBlur}
            onChangeText={text => {
              const formattedPhoneNumber = formatPhoneNumber(text);
              onChange(formattedPhoneNumber);
            }}
            value={value}
            keyboardType="number-pad"
            maxLength={13}
          />
        )}
      />
      {errors.phoneNumber && (
        <Text style={styles.errorText}>{errors.phoneNumber.message}</Text>
      )}
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  label: {
    color: '#000000',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  inputError: {
    height: 40,
    borderColor: '#FF4242',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
