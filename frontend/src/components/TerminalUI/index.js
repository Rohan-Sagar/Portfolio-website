import React, { useState, useEffect} from 'react'
import {
  RedCircle,
  YellowCircle,
  GreenCircle,
  StyledIDEContainer,
  NavBar,
  StyledCodeEditor,
  TextEditor,
} from './Terminal.styles'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

function TerminalUI() {
    const initialScript = `
      import pandas as pd
      import numpy as np
      import matplotlib.pyplot as plt
      
      df = pd.read_csv('technology_stocks.csv')
      
      df['P/E'] = df['price'] / df['earnings']
      df['P/B'] = df['price'] / df['book_value']
      df['ROE'] = df['earnings'] / df['equity']
      
      plt.plot(df['P/E'], label='P/E')
      plt.plot(df['P/B'], label='P/B')
      plt.plot(df['ROE'], label='ROE')
      plt.legend()
      plt.show()
      
      df['MA_P/E'] = df['P/E'].rolling(window=10).mean()
      df['MA_P/B'] = df['P/B'].rolling(window=10).mean()
      df['MA_ROE'] = df['ROE'].rolling(window=10).mean()
      
      plt.plot(df['P/E'], label='P/E')
      plt.plot(df['MA_P/E'], label='MA_P/E')
      plt.plot(df['P/B'], label='P/B')
      plt.plot(df['MA_P/B'], label='MA_P/B')
      plt.plot(df['ROE'], label='ROE')
      plt.plot(df['MA_ROE'], label='MA_ROE')
      plt.legend()
      plt.show()
      
      def buy_signal(df):
          if df['P/E'] < df['MA_P/E'] and df['P/B'] < df['MA_P/B'] and df['ROE'] > df['MA_ROE']:
              return True
          else:
              return False
      
      def sell_signal(df):
          if df['P/E'] > df['MA_P/E'] and df['P/B'] > df['MA_P/B'] and df['ROE'] < df['MA_ROE']:
              return True
          else:
              return False
      
      signals = []
      for i in range(len(df) - 1):
          if buy_signal(df.iloc[i]):
              signals.append('buy')
          elif sell_signal(df.iloc[i]):
              signals.append('sell')
          else:
              signals.append('hold')
      
      plt.plot(df['P/E'], label='P/E')
      plt.plot(df['MA_P/E'], label='MA_P/E')
      plt.plot(df['P/B'], label='P/B')
      plt.plot(df['MA_P/B'], label='MA_P/B')
      plt.plot(df['ROE'], label='ROE')
      plt.plot(df['MA_ROE'], label='MA_ROE')
      plt.plot(signals, label='Signals')
      plt.legend()
      plt.show()
      
      returns = np.zeros(len(signals))
      for i in range(len(signals) - 1):
          if signals[i] == 'buy':
              returns[i + 1] = df['price'].iloc[i + 1] / df['price'].iloc[i]
          else:
              returns[i + 1] = 1
      
      print('Average return: {}'.format(np.mean(returns)))
      print('Sharpe ratio: {}'.format(np.mean(returns) / np.std(returns)))
    `;
  
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
            <SyntaxHighlighter 
              language="python" 
              style={tomorrowNight} 
              showLineNumbers={true}
              customStyle={{ 
                boxShadow: 'none', 
                border: 'none', 
                background: 'transparent',
                fontFamily: 'Poppins, sans-serif',
              }}>
              {initialScript}
            </SyntaxHighlighter>
          </TextEditor>
        </StyledCodeEditor>
      </StyledIDEContainer>
    );
}

export default TerminalUI