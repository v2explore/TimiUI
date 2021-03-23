import React, { ReactElement } from 'react';
import Icon from '../../lib/icon/icon';
import './icon.example.scss';

export default (): ReactElement => {
  return (
    <div className="icon-example">
      <h2>Icon 图标</h2>
      <div className="description">
        语义化的矢量图形，默认内置28款精美图标。
      </div>
      <h3>示例</h3>
      <div className="example-content">
        <ul className="example-content-component">
          <li>
            <Icon name="album" />
            <div className="example-icon-desc">name="album"</div>
          </li>
          <li>
            <Icon name="alipay" />
            <div className="example-icon-desc">name="alipay"</div>
          </li>
          <li>
            <Icon name="bag" />
            <div className="example-icon-desc">name="bag"</div>
          </li>
          <li>
            <Icon name="bin" />
            <div className="example-icon-desc">name="bin"</div>
          </li>
          <li>
            <Icon name="camera" />
            <div className="example-icon-desc">name="camera"</div>
          </li>
          <li>
            <Icon name="caution" />
            <div className="example-icon-desc">name="caution"</div>
          </li>
          <li>
            <Icon name="coment" />
            <div className="example-icon-desc">name="coment"</div>
          </li>
          <li>
            <Icon name="confirm" />
            <div className="example-icon-desc">name="confirm"</div>
          </li>
          <li>
            <Icon name="exist" />
            <div className="example-icon-desc">name="exist"</div>
          </li>
          <li>
            <Icon name="history" />
            <div className="example-icon-desc">name="history"</div>
          </li>
          <li>
            <Icon name="location" />
            <div className="example-icon-desc">name="location"</div>
          </li>
          <li>
            <Icon name="order" />
            <div className="example-icon-desc">name="order"</div>
          </li>
          <li>
            <Icon name="parcel" />
            <div className="example-icon-desc">name="parcel"</div>
          </li>
          <li>
            <Icon name="payment" />
            <div className="example-icon-desc">name="payment"</div>
          </li>
          <li>
            <Icon name="process" />
            <div className="example-icon-desc">name="process"</div>
          </li>
          <li>
            <Icon name="profile" />
            <div className="example-icon-desc">name="profile"</div>
          </li>
          <li>
            <Icon name="scan" />
            <div className="example-icon-desc">name="scan"</div>
          </li>
          <li>
            <Icon name="search" />
            <div className="example-icon-desc">name="search"</div>
          </li>
          <li>
            <Icon name="sent" />
            <div className="example-icon-desc">name="sent"</div>
          </li>
          <li>
            <Icon name="service" />
            <div className="example-icon-desc">name="service"</div>
          </li>
          <li>
            <Icon name="shipping" />
            <div className="example-icon-desc">name="shipping"</div>
          </li>
          <li>
            <Icon name="shopping" />
            <div className="example-icon-desc">name="shopping"</div>
          </li>
          <li>
            <Icon name="ticket" />
            <div className="example-icon-desc">name="ticket"</div>
          </li>
          <li>
            <Icon name="tool" />
            <div className="example-icon-desc">name="tool"</div>
          </li>
          <li>
            <Icon name="user" />
            <div className="example-icon-desc">name="user"</div>
          </li>
          <li>
            <Icon name="wechat" />
            <div className="example-icon-desc">name="wechat"</div>
          </li>
          <li>
            <Icon name="write" />
            <div className="example-icon-desc">name="write"</div>
          </li>
          <li>
            <Icon name="wrong" />
            <div className="example-icon-desc">name="wrong"</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
