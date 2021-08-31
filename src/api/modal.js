const apis = [
  {
    name: 'Props',
    descKey: 'app.api.title.props',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'value,v-model',
        descKey: 'app.api.modal.desc.value',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'size',
        descKey: 'app.api.modal.desc.size',
        version: '',
        type: 'String',
        enum: 'medium, small, mini',
        defVal: '继承上下文',
        list: []
      },
      {
        name: 'loading',
        descKey: 'app.api.modal.desc.loading',
        version: '2.8',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'id',
        descKey: 'app.api.modal.desc.id',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'title',
        descKey: 'app.api.modal.desc.title',
        version: '',
        type: 'String',
        enum: '',
        defVal: '消息提示',
        list: []
      },
      {
        name: 'type',
        descKey: 'app.api.modal.desc.type',
        version: '',
        type: 'String',
        enum: 'alert, confirm, message',
        defVal: '',
        list: []
      },
      {
        name: 'status',
        descKey: 'app.api.modal.desc.status',
        version: '',
        type: 'String',
        enum: 'info, success, warning, error, loading',
        defVal: '',
        list: []
      },
      {
        name: 'className',
        desc: '给窗口附加 className',
        version: '2.9.19',
        type: 'string',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'iconStatus',
        descKey: 'app.api.modal.desc.iconStatus',
        version: '2.7.0',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'content',
        descKey: 'app.api.modal.desc.content',
        version: '2.10.21',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'message',
        abandoned: true,
        descKey: 'app.api.modal.desc.message',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'cancel-button-text',
        desc: '只对 type=confirm 有效，取消按钮的文本内容',
        version: '2.9.17',
        type: 'string',
        enum: '',
        defVal: '取消',
        list: []
      },
      {
        name: 'confirm-button-text',
        desc: '只对 type=alert|confirm 有效，确定按钮的文本内容',
        version: '2.9.17',
        type: 'string',
        enum: '',
        defVal: '确定',
        list: []
      },
      {
        name: 'showHeader',
        descKey: 'app.api.modal.desc.showHeader',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'showFooter',
        descKey: 'app.api.modal.desc.showFooter',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'lock-view',
        descKey: 'app.api.modal.desc.lockView',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'lock-scroll',
        descKey: 'app.api.modal.desc.lockScroll',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'mask',
        descKey: 'app.api.modal.desc.mask',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'mask-closable',
        descKey: 'app.api.modal.desc.maskClosable',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'esc-closable',
        descKey: 'app.api.modal.desc.escClosable',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'show-zoom',
        descKey: 'app.api.modal.desc.showZoom',
        version: '2.10.9',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'resize',
        descKey: 'app.api.modal.desc.resize',
        version: '2.4.3',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'duration',
        descKey: 'app.api.modal.desc.duration',
        version: '',
        type: 'Number, String',
        enum: '',
        defVal: '3000',
        list: []
      },
      {
        name: 'width',
        descKey: 'app.api.modal.desc.width',
        version: '',
        type: 'Number, String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'height',
        descKey: 'app.api.modal.desc.height',
        version: '',
        type: 'Number, String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'min-width',
        descKey: 'app.api.modal.desc.minWidth',
        version: '2.5.15',
        type: 'Number, String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'min-height',
        descKey: 'app.api.modal.desc.minHeight',
        version: '2.5.15',
        type: 'Number, String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'top',
        descKey: 'app.api.modal.desc.top',
        version: '',
        type: 'Number, String',
        enum: '',
        defVal: '15',
        list: []
      },
      {
        name: 'position',
        descKey: 'app.api.modal.desc.position',
        version: '2.9.12',
        type: 'String, Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'top',
            desc: '距离顶部的偏移',
            version: '',
            type: 'Number, String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'left',
            desc: '距离左侧的偏移',
            version: '',
            type: 'Number, String',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'zIndex',
        descKey: 'app.api.modal.desc.zIndex',
        version: '',
        type: 'Number',
        enum: '',
        defVal: '继承 setup.zIndex',
        list: []
      },
      {
        name: 'show-title-overflow',
        descKey: 'app.api.modal.desc.showTitleOverflow',
        version: '2.8',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'transfer',
        desc: '是否将弹框容器插入于 body 内',
        version: '2.8.22',
        type: 'Boolean',
        enum: '',
        defVal: '默认 false，继承 setup.modal.transfer',
        list: []
      },
      {
        name: 'fullscreen',
        descKey: 'app.api.modal.desc.fullscreen',
        version: '2.5.18',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'dblclickZoom',
        descKey: 'app.api.modal.desc.dblclickZoom',
        version: '2.6.0',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'remember',
        descKey: 'app.api.modal.desc.remember',
        version: '2.7.0',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'destroy-on-close',
        descKey: 'app.api.modal.desc.destroyOnClose',
        version: '2.7.21',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'storage',
        descKey: 'app.api.modal.desc.storage',
        version: '2.8',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'before-hide-method',
        desc: '在窗口隐藏之前执行，可以返回 Error 阻止关闭，支持异步',
        version: '2.10.6',
        type: 'Function/Promise<any>',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  },
  {
    name: 'Slots',
    descKey: 'app.api.title.slots',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: '—',
        desc: '窗口内容模板',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'header',
        desc: '窗口头部的模板（如果使用了，则 solt title 无效）',
        version: '2.6.1',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'title',
        desc: '窗口标题的模板',
        version: '2.6.1',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'footer',
        desc: '窗口底部的模板',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  },
  {
    name: 'Events',
    descKey: 'app.api.title.events',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'inserted',
        desc: '在窗口元素插入父节点时会触发该事件（只会执行一次）',
        version: '2.6.6',
        type: '{ type, $event }',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'show',
        desc: '在窗口显示时会触发该事件',
        version: '',
        type: '{ type, $event }',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'hide',
        desc: '在窗口隐藏时会触发该事件',
        version: '',
        type: '{ type, $event }',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'confirm',
        desc: '点击确定按钮时会触发该事件',
        version: '',
        type: '{ type, $event }',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'close',
        desc: '点击关闭按钮时会触发该事件',
        version: '',
        type: '{ type, $event }',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'zoom',
        desc: '窗口缩放时会触发该事件',
        version: '',
        type: '{ type, $event }',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  },
  {
    name: 'Methods',
    descKey: 'app.api.title.methods',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'open()',
        desc: '手动打开窗口',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'close()',
        desc: '手动关闭窗口',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getBox()',
        desc: '获取当前窗口元素',
        version: '2.5.11',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'zoom()',
        desc: '切换窗口最大化/还原',
        version: '2.8.29',
        type: 'Promise<status>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getPosition()',
        desc: '只对 type=modal 有效，获取窗口位置',
        version: '2.9.12',
        type: '{top,left}',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'setPosition(top, left)',
        desc: '只对 type=modal 有效，设置窗口位置',
        version: '2.9.12',
        type: 'Promise',
        enum: '',
        defVal: 'top?: number, left?: number',
        list: []
      },
      {
        name: 'isMaximized()',
        desc: '判断是否最大化显示',
        version: '2.8.29',
        type: 'Boolean',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'maximize()',
        desc: '如果窗口处于常规状态，则最大化窗口',
        version: '2.5.16',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'revert()',
        desc: '如果窗口处于最大化状态，则还原窗口',
        version: '2.5.16',
        type: '',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  }
]

export default apis
