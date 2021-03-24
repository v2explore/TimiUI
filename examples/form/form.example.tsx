import React, { useState, Fragment } from 'react';
import Form, { FormValue, Validator, noError } from '../../lib/form/form';
import Button from '../../lib/button/button';

const usernames = ['jack', 'alice', 'bob'];
const checkUserName = (
  username: string,
  succeed: () => void,
  fail: () => void,
) => {
  setTimeout(() => {
    if (usernames.indexOf(username) >= 0) {
      fail();
    } else {
      succeed();
    }
  }, 0);
};

export default function () {
  const [formData, setFormData] = useState<FormValue>({
    username: 'TiMi',
    password: '',
  });
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' }, required: true },
    { name: 'password', label: '密码', input: { type: 'password' }, required: true },
    { name: 'email', label: '邮箱', input: { type: 'text' }, required: false },
  ]);
  const [errors, setErrors] = useState({});
  const validator = (username: string) => {
    return new Promise<string>((resolve, reject) => {
      checkUserName(
        username,
        () => resolve(''),
        () => reject('unique'),
      );
    });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      { key: 'username', required: true },
      { key: 'username', minLength: 3, maxLength: 16 },
      { key: 'username', validator },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
      { key: 'password', required: true },
    ];
    Validator(formData, rules, (errors) => {
      console.log('errors', errors);
      setErrors(errors);
      if (noError(errors)) {
        // do something
      }
    });
  };
  const transformError = (message: string) => {
    const map: any = {
      unique: 'username is taken',
      required: 'required',
      minLength: 'too short',
      maxLength: 'too long',
    };
    return map[message];
  };
  return (
    <div>
      <h2>Form 表单</h2>
      <div className="description">响应用户点击行为，触发相应业务逻辑。</div>
      <h3>示例</h3>
      <div className="example-content">
        <div className="example-content-component">
          <Form
            value={formData}
            fields={fields}
            buttons={
              <Fragment>
                <Button type="submit" level="important">
                  提交
                </Button>
                <Button>返回</Button>
              </Fragment>
            }
            errors={errors}
            transformError={transformError}
            onChange={(newValue) => setFormData(newValue)}
            onSubmit={onSubmit}
          />
        </div>
        <div className="example-content-desc">
          <div className="example-content-desc-title">基本使用</div>
          <div>基本的表单数据域控制展示，包含布局、初始化、验证、提交，支持增加自定义校验规则。</div>
        </div>
      </div>
    </div>
  );
}
