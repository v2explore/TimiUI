import React, { ReactElement, ReactFragment, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { scopedClassMaker } from '../helpers/helpers';
import { Icon, Button } from '../index';
import './dialog.scss';

interface Props {
  title?: string,
  visible: boolean;
  onClose: React.MouseEventHandler;
  maskClosable?: boolean;
  style?: React.CSSProperties;
  footer?: ReactFragment | ReactElement | null;
}
// scopedClass
const sc = scopedClassMaker('tm-dialog');

const Dialog: React.FC<Props> = ({
  title,
  visible,
  children,
  onClose,
  maskClosable,
  style,
  footer,
}) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    if (onClose) {
      onClose(e);
    }
  };
  const onClickMask: React.MouseEventHandler = (e) => {
    if (maskClosable) {
      onClose(e);
    }
  };
  const content = visible ? (
    <React.Fragment>
      <div className={sc('mask')} onClick={onClickMask}></div>
      <div className={sc('wrap')} style={style}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close" color="#fff" />
        </div>
        <header className={sc('header')}>{ title || 'Title' }</header>
        <main className={sc('main')}>{children}</main>

        {footer ? (
          <footer className={sc('footer')}>{footer}</footer>
        ) : footer === null ? null : (
          <footer className={sc('footer')}>
            <Button className={sc('button')} onClick={onClickClose}>
              取消
            </Button>
            <Button level="important" className={sc('button')} onClick={onClickClose}>
              确定
            </Button>
          </footer>
        )}
      </div>
    </React.Fragment>
  ) : null;
  return ReactDOM.createPortal(content, document.body);
};

Dialog.defaultProps = {
  maskClosable: true,
};

const createModal = (
  content: ReactNode,
  footer?: ReactFragment | ReactElement | null,
) => {
  const render = (props: Props, children: ReactNode) => {
    ReactDOM.render(React.createElement(Dialog, props, children), container);
  };
  const onClose = () => {
    render({ ...props, visible: false }, content);
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    return true;
  };
  const props = {
    visible: true,
    onClose,
    footer,
  };
  const container = document.createElement('div');
  document.body.appendChild(container);
  render(props, content);
  return onClose;
};

export const alert = (content: ReactNode, callback: () => void) => {
  const close = createModal(
    content,
    <Button level="important" onClick={() => close() && callback && callback()}>确定</Button>,
  );
};

export const confirm = (
  content: ReactNode,
  yes: () => void,
  no?: () => void,
) => {
  const close = createModal(
    content,
    <React.Fragment>
      <Button className={sc('button')} onClick={() => close() && no && no()}>取消</Button>
      <Button level="important" className={sc('button')} onClick={() => close() && yes && yes()}>确定</Button>
    </React.Fragment>,
  );
};

export const modal = (content: ReactNode) => {
  return createModal(content);
};

export default Dialog;
