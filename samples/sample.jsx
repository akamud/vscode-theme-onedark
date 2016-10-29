import * as React from 'react';

export class Test extends React.Component<{bar: string}, {}>{
    render(){
        return (
            <div foo={this.props.bar} bar={true} baz={'str'} boz={"other str"}></div>
        );
    }
}