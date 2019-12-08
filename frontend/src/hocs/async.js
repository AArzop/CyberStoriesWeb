import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAjaxStoreData, updateAjaxStoreData } from '../actions/actions'
import LoadingRing from '../components/LoadingRing'
import { compose } from 'redux'

export const withAjaxStoreData = (id, url, config = {}) => (WrappedComponent) => {
  const mapStateToProps = state => ({
    loading: state.ajax[id] && state.ajax[id].loading,
    error: state.ajax[id] && state.ajax[id].error,
    response: state.ajax[id] && state.ajax[id].response
  })

  const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch(fetchAjaxStoreData(id, url))
  })

  return (
    connect(mapStateToProps, mapDispatchToProps)(
      class extends Component {
        componentDidMount () {
          if (!this.props.response && !this.props.loading && !this.props.error) {
            this.props.fetch(id, url)
          }
        }

        render () {
          if (this.props.response) {
            return <WrappedComponent {...{ [id]: this.props.response }} {...this.props}/>
          }

          if (this.props.error && !config.renderOnError) {
            return (
              <div>An error has occurred : {String(this.props.error)}</div>
            )
          }

          if (this.props.error && config.renderOnError) {
            return <WrappedComponent {...{ [id]: this.props.response }} error={this.props.error} {...this.props}/>
          }

          if (this.props.loading) {
            return config.skeleton || (
              <LoadingRing className={'mx-auto'}/>
            )
          }

          return null
        }
      }
    )
  )
}

export const withWebSocketStoreData = (id, url, namespace = null) => (WrappedComponent) => {
  namespace = namespace || id

  const mapStateToProps = state => ({
    response: state.ajax[id] && state.ajax[id].response
  })

  const mapDispatchToProps = dispatch => ({
    update: (response) => dispatch(updateAjaxStoreData(id, response))
  })

  return (
    connect(mapStateToProps, mapDispatchToProps)(
      class extends Component {
        componentDidMount() {
          let wsScheme = window.location.protocol === 'https:' ? 'wss' : 'ws'
          let webSocket = new WebSocket(
            wsScheme + '://' + window.location.host +
            url)

          webSocket.onmessage = (e) => {
            const content = JSON.parse(e.data)
            if (content.namespace !== namespace) { return }
            this.props.update(JSON.parse(content.data))
          }

          webSocket.onClose = () => console.warn('Websocket closed unexpectedly')
        }

        render() {
          return (
            <WrappedComponent {...{[id]: this.props.response}} {...this.props}>
              {this.props.children}
            </WrappedComponent>
          )
        }
      }
    )
  )
}

export const withSyncStoreData = (id, httpUrl, wsUrl, namespace = null) => compose(
  withWebSocketStoreData(id, wsUrl, namespace),
  withAjaxStoreData(id, httpUrl)
)

