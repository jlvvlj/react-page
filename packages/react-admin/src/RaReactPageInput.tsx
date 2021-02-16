import { Paper } from '@material-ui/core';
import Editor, { EditorProps } from '@react-page/editor';
import React from 'react';

import { Labeled, useInput } from 'react-admin';

const RaReactPageInput: React.FC<
  {
    label?: string;
    source: string;
    style?: React.CSSProperties;
  } & EditorProps
> = ({ label = 'Content', source, style, ...editorProps }) => {
  const {
    input: { value, onChange },
  } = useInput({ source });
  return (
    <Labeled label={label} source={source} fullWidth>
      <>
        <Paper
          elevation={5}
          style={{
            overflow: 'visible',
            padding: 16,
            marginRight: 64,

            ...style,
          }}
        >
          <Editor value={value} onChange={onChange} {...editorProps} />
        </Paper>
      </>
    </Labeled>
  );
};

export default RaReactPageInput;
