import React, { useState, useEffect} from 'react'
import {
  RedCircle,
  YellowCircle,
  GreenCircle,
  StyledIDEContainer,
  NavBar,
  StyledCodeEditor,
  LineNumber,
  TextEditor,
} from './Terminal.styles'

function TerminalUI() {
    const [script, setScript] = useState('');

    useEffect(() => {
      const initialScript = `
      import os
      import requests
      
      def trade_btc(username, password):
          btc_spot = yf.download("BTC-USD", start = "2015-01-01", end = "2023-02-15")
          ma_50_days = btc['Close'].rolling(window=50).mean().iloc[-1]
      
          if not platform_login(username, password):
              print('Login failed')
              return
      
          balance = get_balance()
          print(f'Current account balance: {balance:.2f}')
      
          trade_amount = balance * 0.2 
          if trade_amount > 0:
              print(f'Trade amount: {trade_amount:.2f}')
      
              if btc_spot > ma_50_days:
                  order_id = buy_order(trade_amount)
                  if order_id:
                      print(f'Buy order placed (order ID: {order_id})')
                  else:
                      print('Failed to place buy order')
              else:
                  print(f'BTC price ({btc_spot:.2f}) --> below the 50 day ma ({ma_50_days:.2f})')
          else:
              print('Not enough balance to place a trade')
    `;
      setScript(initialScript);
    }, []);
  
    const handleScriptChange = (event) => {
      setScript(event.target.value);
    };
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
      }, 500);
      return () => {
        clearTimeout(timeoutId);
      };
    }, [script]);
  
    return (
      <StyledIDEContainer>
        <NavBar>
            <RedCircle></RedCircle>
            <YellowCircle></YellowCircle>
            <GreenCircle></GreenCircle>
            <h4>Script.py</h4>
        </NavBar>
        <StyledCodeEditor> 
          <TextEditor>
            <span style={{color: "#F733FF"}}>import&nbsp;<span style={{color: "#FFF"}}>os</span></span>
            <span style={{color: "#F733FF"}}>import&nbsp;<span style={{color: "#FFF"}}>requests</span></span>
            <br/>
            <span style={{color: "#F733FF"}}>def&nbsp;<span style={{color: "#FAFF33"}}>trade_btc(<span style={{color: "#3DFFE4"}}>username, password</span>):</span></span>
          </TextEditor>
        </StyledCodeEditor>
      </StyledIDEContainer>
    );
}

export default TerminalUI

{/* <StyledCodeEditor value={script} onChange={handleScriptChange}> */}


//#FF3348 - red
//#23CC0F - green