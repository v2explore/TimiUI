import React from 'react';
import { ReactFragment } from 'react';
import Validator, { noError } from './validator';
import Input from '../input/input';
import { classnames } from '../helpers/helpers';
import './form.scss';


export interface FormValue {
  [K: string]: any;
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string; label: string; input: { type: string }; required ?: boolean }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [K: string]: string[] };
  errorsDisplayMode?: 'first' | 'all';
  transformError?: (message: string) => string;
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    const newFormValue = { ...formData, [name]: value };
    props.onChange(newFormValue);
  };
  const transformError = (message: string) => {
    const map: any = {
      required: 'required',
      minLength: 'too short',
      maxLength: 'too long',
    };
    return (
      (props.transformError && props.transformError(message)) ||
      map[message] ||
      'unknown error'
    );
  };
  return (
    <form onSubmit={onSubmit}>
      <table className="tm-form-table">
        <tbody>
          {props.fields.map((f) => (
            <tr className={classnames('tm-form-tr')} key={f.name}>
              <td className="tm-form-td">
                <span className={classnames('tm-form-label', f.required ? 'tm-form-label-required' : '')}>{f.label}</span>
              </td>
              <td className="tm-form-td">
                <Input
                  className={classnames('tm-form-input', props.errors[f.name] ? 'tm-form-input-error' : '')}
                  type={f.input.type}
                  value={formData[f.name]}
                  onChange={(e) => onInputChange(f.name, e.target.value)}
                />
                <div className="tm-form-error">
                  {props.errors[f.name] ? (
                    props.errorsDisplayMode === 'first' ? (
                      transformError!(props.errors[f.name][0])
                    ) : (
                      props.errors[f.name].map(transformError!).join()
                    )
                  ) : (
                    <span>&nbsp;</span>
                  )}{' '}
                </div>
              </td>
            </tr>
          ))}
          <tr className="tm-form-tr">
            <td className="tm-form-td" />
            <td className="tm-form-td">{props.buttons}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

Form.defaultProps = {
  errorsDisplayMode: 'first',
};
export { Validator, noError };
export default Form;
