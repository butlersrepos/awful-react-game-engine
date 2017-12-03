# Presenters
Presenters are _dumb_ components.

- **components** - as in web components _or_ elements _or_ specifically in this context React elements.

- _dumb_ because they have no awareness of the redux store and app state beyond props of their own

## Common Presenter Structure
Most Presenters should be of the following form... for this example we're making a simple call-to-action component which will be provided with an `instruction` and an `onAction` prop.

```
import React, { PureComponent } from 'react'

class Foo extends PureComponent {
  render() {
    <button onClick={this.props.onAction}>{ this.props.instruction }</button>
  }
}

export default Foo
```
