import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gale.sanguokill.hd',
  name: '极略三国',
  groups: [
    {
      name: '观看广告',
      key: 0,
      desc: '观看广告',
      rules: [
        {
          matches: [
            'TextView[text="反馈"] < FrameLayout + LinearLayout > LinearLayout > ImageView',
          ],
          snapshotUrls: ['https://i.gkd.li/i/16336280'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Landscape_Activity',
          ],
        },
      ],
    },
  ],
});
