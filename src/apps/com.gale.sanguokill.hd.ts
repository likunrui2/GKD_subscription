import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gale.sanguokill.hd',
  name: '极略三国',
  groups: [
    {
      key: 0,
      name: '观看广告',
      rules: [
        {
          key: 0,
          name: '反馈-x',
          matches: [
            'TextView[text="反馈"] < FrameLayout + LinearLayout > LinearLayout > ImageView',
          ],
          snapshotUrls: ['https://i.gkd.li/i/16336280'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Landscape_Activity',
          ],
          matchDelay: 10000,
        },

        {
          key: 2,
          name: 'xx s 后续播',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Landscape_Activity',
          matches: '@Image < View -4 View > TextView[text="后续播"]',
          snapshotUrls: 'https://i.gkd.li/i/16346791',
          matchTime: 30000,
          actionMaximum: 1,
        },
      ],
    },
    {
      key: 1,
      name: '观看广告（待废弃）',
      rules: [
        {
          key: 0,
          name: 'xx s-跳过',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Landscape_Activity',
          matches: '@TextView[text$="跳过"] - TextView[text$="s"]',
          snapshotUrls: 'https://i.gkd.li/i/16346416',
          matchDelay: 10000,
          matchTime: 70000,
        },
      ],
    },
  ],
});
