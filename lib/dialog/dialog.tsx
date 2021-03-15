import React from 'react';
import ReactDOM from 'react-dom';
import { scopedClassMaker } from '../utils/classes';
import { Icon } from '../index';
import './dialog.scss';

interface Props {
  visible: boolean;
  onClose: React.MouseEventHandler;
  maskClosable?: boolean;
  style?: React.CSSProperties;
}

const scopedClass = scopedClassMaker('tm-dialog');

const Dialog: React.FC<Props> = ({
  visible,
  children,
  onClose,
  maskClosable,
  style,
}) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    onClose(e);
  };
  const onClickMask: React.MouseEventHandler = (e) => {
    if (maskClosable) {
      onClose(e);
    }
  };
  const content = visible ? (
    <>
      <div className={scopedClass('mask')} onClick={onClickMask}></div>
      <div className={scopedClass('wrap')} style={style}>
        <div className={scopedClass('close')} onClick={onClickClose}>
          <Icon name="close" color="#fff" />
        </div>
        <header className={scopedClass('header')}>提示</header>
        <main className={scopedClass('main')}>{children}</main>
        <footer className={scopedClass('footer')}>
          <button className={scopedClass('button')}>取消</button>
          <button className={scopedClass('button')}>确定</button>
        </footer>
      </div>
    </>
  ) : null;
  return ReactDOM.createPortal(content, document.body);
};

Dialog.defaultProps = {
  maskClosable: true,
};

export const alert = (content: string) => {
  const div = document.createElement('div');
  const component = (
    <Dialog
      visible
      onClose={() => {
        ReactDOM.render(<></>, div);
        // ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
      }}
    >
      {content}
    </Dialog>
  );
  document.body.append(div);
  ReactDOM.render(component, div);
};

export const confirm = (content: string) => {
  const div = document.createElement('div');
  const component = (
    <Dialog
      visible
      onClose={() => {
        ReactDOM.render(<></>, div);
        // ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
      }}
    >
      {content}
    </Dialog>
  );
  document.body.append(div);
  ReactDOM.render(component, div);
};


export default Dialog;
