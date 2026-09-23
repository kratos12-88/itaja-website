'use client';

import { useState } from 'react';

type Stage = 'product' | 'choice' | 'whatsapp' | 'paystack';

export default function InteractiveOrderFlow() {
  const [stage, setStage] = useState<Stage>('product');

  return (
    <div className="order-flow-demo">
      <div className="order-flow-top">
        <span>Interactive sample</span>
        <button type="button" onClick={() => setStage('product')}>Reset</button>
      </div>

      {stage === 'product' && (
        <div className="order-demo-product">
          <div className="order-demo-image tile-1" />
          <div>
            <small>Closet by Ada</small>
            <h3>Vintage Brown Jacket</h3>
            <strong>₦18,500</strong>
            <p>Size M · 1 in stock</p>
            <button onClick={() => setStage('choice')}>Order this item</button>
          </div>
        </div>
      )}

      {stage === 'choice' && (
        <div className="order-demo-choice">
          <span className="order-demo-icon">01</span>
          <h3>How would you like to order?</h3>
          <p>Itaja keeps the familiar WhatsApp path and can also offer direct Paystack checkout.</p>
          <div className="order-demo-actions">
            <button onClick={() => setStage('whatsapp')}>Order on WhatsApp</button>
            <button className="secondary" onClick={() => setStage('paystack')}>Pay with Paystack</button>
          </div>
        </div>
      )}

      {stage === 'whatsapp' && (
        <div className="order-demo-result whatsapp-result">
          <span>WhatsApp order</span>
          <h3>Message ready to send.</h3>
          <div className="message-preview">Hi Closet by Ada, I’d like to order the Vintage Brown Jacket (Size M) for ₦18,500. Is it still available?</div>
          <p>The buyer starts the conversation with the product context already included.</p>
          <button onClick={() => setStage('choice')}>Choose another option</button>
        </div>
      )}

      {stage === 'paystack' && (
        <div className="order-demo-result paystack-result">
          <span>Paystack checkout</span>
          <h3>Ready for direct payment.</h3>
          <div className="paystack-summary"><strong>Vintage Brown Jacket</strong><b>₦18,500</b></div>
          <p>For Pro stores, Itaja can route the buyer into checkout and record the order after payment is confirmed.</p>
          <button onClick={() => setStage('choice')}>Choose another option</button>
        </div>
      )}
    </div>
  );
}
