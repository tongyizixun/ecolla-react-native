/*
 * @Author: 刘利军
 * @Date: 2021-07-22 15:22:16
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-07-22 15:22:49
 * @Description:
 * @PageName:
 */

module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
  },
};
