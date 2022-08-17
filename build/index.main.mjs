// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      3: [ctc0, ctc1, ctc0],
      4: [ctc0, ctc1, ctc0, ctc2, ctc1],
      5: [ctc0, ctc1, ctc0, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  
  
  const v161 = stdlib.protect(ctc0, interact.Alice_num, 'for Alice\'s interact field Alice_num');
  const v162 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v163 = stdlib.protect(ctc0, interact.total_Number_guess, 'for Alice\'s interact field total_Number_guess');
  const v164 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v164, v162],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:36:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v164, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v170, v171], secs: v173, time: v172, didSend: v35, from: v169 } = txn1;
      
      sim_r.txns.push({
        amt: v170,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v182 = stdlib.safeAdd(v172, v171);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v170, v171], secs: v173, time: v172, didSend: v35, from: v169 } = txn1;
  ;
  const v182 = stdlib.safeAdd(v172, v171);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: ['time', v182],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v169, v170, v182],
      evt_cnt: 0,
      funcNum: 2,
      lct: v172,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v263, time: v262, didSend: v142, from: v261 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v169,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v263, time: v262, didSend: v142, from: v261 } = txn3;
    ;
    ;
    return;
    
    }
  else {
    const {data: [v187], secs: v189, time: v188, didSend: v45, from: v186 } = txn2;
    ;
    const v194 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:49:58:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:47:15:application call to [unknown function] (defined at: ./index.rsh:47:19:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v195 = stdlib.digest(ctc2, [v194, v161]);
    
    const txn3 = await (ctc.sendrecv({
      args: [v169, v170, v186, v195, v163],
      evt_cnt: 2,
      funcNum: 3,
      lct: v188,
      onlyIf: true,
      out_tys: [ctc3, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:53:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v198, v199], secs: v201, time: v200, didSend: v59, from: v197 } = txn3;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc4, ctc3, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v198, v199], secs: v201, time: v200, didSend: v59, from: v197 } = txn3;
    ;
    const v202 = stdlib.addressEq(v169, v197);
    stdlib.assert(v202, {
      at: './index.rsh:53:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 4,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v206, v207], secs: v209, time: v208, didSend: v69, from: v205 } = txn4;
    ;
    const v210 = stdlib.addressEq(v186, v205);
    stdlib.assert(v210, {
      at: './index.rsh:61:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn5 = await (ctc.sendrecv({
      args: [v169, v170, v186, v198, v199, v206, v207, v194, v161],
      evt_cnt: 2,
      funcNum: 5,
      lct: v208,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:67:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v214, v215], secs: v217, time: v216, didSend: v79, from: v213 } = txn5;
        
        ;
        const v221 = stdlib.safeAdd(v215, v206);
        const v222 = stdlib.eq(v199, v221);
        const v223 = stdlib.eq(v207, v221);
        const v224 = v223 ? false : true;
        const v225 = v222 ? v224 : false;
        const v229 = v222 ? false : v223;
        const v232 = v222 ? v223 : false;
        const v233 = v232 ? stdlib.checkedBigNumberify('./index.rsh:8:64:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:9:21:decimal', stdlib.UInt_max, '0');
        const v234 = v229 ? stdlib.checkedBigNumberify('./index.rsh:7:60:decimal', stdlib.UInt_max, '2') : v233;
        const v235 = v225 ? stdlib.checkedBigNumberify('./index.rsh:6:56:decimal', stdlib.UInt_max, '1') : v234;
        
        const v240 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:75:20:decimal', stdlib.UInt_max, '1'));
        const v241 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:76:24:decimal', stdlib.UInt_max, '2'));
        const v242 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v243 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v244 = v241 ? v242 : v243;
        const v245 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v246 = v240 ? v245 : v244;
        const v247 = v246[stdlib.checkedBigNumberify('./index.rsh:74:11:array', stdlib.UInt_max, '0')];
        const v248 = v246[stdlib.checkedBigNumberify('./index.rsh:74:11:array', stdlib.UInt_max, '1')];
        const v249 = stdlib.safeMul(v170, v247);
        sim_r.txns.push({
          kind: 'from',
          to: v169,
          tok: undefined /* Nothing */
          });
        const v254 = stdlib.safeMul(v170, v248);
        sim_r.txns.push({
          kind: 'from',
          to: v186,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc4, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v214, v215], secs: v217, time: v216, didSend: v79, from: v213 } = txn5;
    ;
    const v218 = stdlib.addressEq(v169, v213);
    stdlib.assert(v218, {
      at: './index.rsh:67:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v219 = stdlib.digest(ctc2, [v214, v215]);
    const v220 = stdlib.digestEq(v198, v219);
    stdlib.assert(v220, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:68:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Alice'
      });
    const v221 = stdlib.safeAdd(v215, v206);
    const v222 = stdlib.eq(v199, v221);
    const v223 = stdlib.eq(v207, v221);
    const v224 = v223 ? false : true;
    const v225 = v222 ? v224 : false;
    const v229 = v222 ? false : v223;
    const v232 = v222 ? v223 : false;
    const v233 = v232 ? stdlib.checkedBigNumberify('./index.rsh:8:64:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:9:21:decimal', stdlib.UInt_max, '0');
    const v234 = v229 ? stdlib.checkedBigNumberify('./index.rsh:7:60:decimal', stdlib.UInt_max, '2') : v233;
    const v235 = v225 ? stdlib.checkedBigNumberify('./index.rsh:6:56:decimal', stdlib.UInt_max, '1') : v234;
    stdlib.protect(ctc1, await interact.seeOutcome(v235), {
      at: './index.rsh:72:28:application',
      fs: ['at ./index.rsh:71:9:application call to [unknown function] (defined at: ./index.rsh:71:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    const v240 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:75:20:decimal', stdlib.UInt_max, '1'));
    const v241 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:76:24:decimal', stdlib.UInt_max, '2'));
    const v242 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v243 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v244 = v241 ? v242 : v243;
    const v245 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v246 = v240 ? v245 : v244;
    const v247 = v246[stdlib.checkedBigNumberify('./index.rsh:74:11:array', stdlib.UInt_max, '0')];
    const v248 = v246[stdlib.checkedBigNumberify('./index.rsh:74:11:array', stdlib.UInt_max, '1')];
    const v249 = stdlib.safeMul(v170, v247);
    ;
    const v254 = stdlib.safeMul(v170, v248);
    ;
    return;
    
    
    
    
    
    
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const v165 = stdlib.protect(ctc0, interact.Bob_num, 'for Bob\'s interact field Bob_num');
  const v166 = stdlib.protect(ctc0, interact.total_Num_guess, 'for Bob\'s interact field total_Num_guess');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v170, v171], secs: v173, time: v172, didSend: v35, from: v169 } = txn1;
  ;
  const v182 = stdlib.safeAdd(v172, v171);
  stdlib.protect(ctc1, await interact.acceptwager(v170), {
    at: './index.rsh:40:51:application',
    fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
    msg: 'acceptwager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v169, v170, v182, null],
    evt_cnt: 1,
    funcNum: 1,
    lct: v172,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [v170, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v187], secs: v189, time: v188, didSend: v45, from: v186 } = txn2;
      
      sim_r.txns.push({
        amt: v170,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v182],
    tys: [ctc4, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v169, v170, v182],
      evt_cnt: 0,
      funcNum: 2,
      lct: v172,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v263, time: v262, didSend: v142, from: v261 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v169,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v263, time: v262, didSend: v142, from: v261 } = txn3;
    ;
    ;
    return;
    
    }
  else {
    const {data: [v187], secs: v189, time: v188, didSend: v45, from: v186 } = txn2;
    ;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc2, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v198, v199], secs: v201, time: v200, didSend: v59, from: v197 } = txn3;
    ;
    const v202 = stdlib.addressEq(v169, v197);
    stdlib.assert(v202, {
      at: './index.rsh:53:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn4 = await (ctc.sendrecv({
      args: [v169, v170, v186, v198, v199, v165, v166],
      evt_cnt: 2,
      funcNum: 4,
      lct: v200,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:61:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v206, v207], secs: v209, time: v208, didSend: v69, from: v205 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc4, ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v206, v207], secs: v209, time: v208, didSend: v69, from: v205 } = txn4;
    ;
    const v210 = stdlib.addressEq(v186, v205);
    stdlib.assert(v210, {
      at: './index.rsh:61:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 5,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v214, v215], secs: v217, time: v216, didSend: v79, from: v213 } = txn5;
    ;
    const v218 = stdlib.addressEq(v169, v213);
    stdlib.assert(v218, {
      at: './index.rsh:67:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v219 = stdlib.digest(ctc3, [v214, v215]);
    const v220 = stdlib.digestEq(v198, v219);
    stdlib.assert(v220, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:68:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Bob'
      });
    const v221 = stdlib.safeAdd(v215, v206);
    const v222 = stdlib.eq(v199, v221);
    const v223 = stdlib.eq(v207, v221);
    const v224 = v223 ? false : true;
    const v225 = v222 ? v224 : false;
    const v229 = v222 ? false : v223;
    const v232 = v222 ? v223 : false;
    const v233 = v232 ? stdlib.checkedBigNumberify('./index.rsh:8:64:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:9:21:decimal', stdlib.UInt_max, '0');
    const v234 = v229 ? stdlib.checkedBigNumberify('./index.rsh:7:60:decimal', stdlib.UInt_max, '2') : v233;
    const v235 = v225 ? stdlib.checkedBigNumberify('./index.rsh:6:56:decimal', stdlib.UInt_max, '1') : v234;
    stdlib.protect(ctc1, await interact.seeOutcome(v235), {
      at: './index.rsh:72:28:application',
      fs: ['at ./index.rsh:71:9:application call to [unknown function] (defined at: ./index.rsh:71:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    const v240 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:75:20:decimal', stdlib.UInt_max, '1'));
    const v241 = stdlib.eq(v235, stdlib.checkedBigNumberify('./index.rsh:76:24:decimal', stdlib.UInt_max, '2'));
    const v242 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v243 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v244 = v241 ? v242 : v243;
    const v245 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v246 = v240 ? v245 : v244;
    const v247 = v246[stdlib.checkedBigNumberify('./index.rsh:74:11:array', stdlib.UInt_max, '0')];
    const v248 = v246[stdlib.checkedBigNumberify('./index.rsh:74:11:array', stdlib.UInt_max, '1')];
    const v249 = stdlib.safeMul(v170, v247);
    ;
    const v254 = stdlib.safeMul(v170, v248);
    ;
    return;
    
    
    
    
    
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAKAAEgCAUDBAJoKCYDAQAAAQEiNQAxGEEDfSlkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBQxAAgFJIQYMQAGPSSEEDEABAyEEEkQhBDQBEkQ0BEkiEkw0AhIRRChkKmRQSTUDSVcAIDX/JFs1/kk1BUkiWzX9JVs1/IAEs1H3jzT9FlA0/BZQsDT/MQASRDQDV0ggNP0WNPwWUAESRDT8NAOBcFsINfs0AyEIWzT7EjX6NAOBeFs0+xI1+SIiNPo0+RBNIQc0+hQ0+RBNIzT6NPkUEE01+IAQAAAAAAAAAAEAAAAAAAAAAYAQAAAAAAAAAAAAAAAAAAAAAjT4IQcSTYAQAAAAAAAAAAIAAAAAAAAAADT4IxJNNfexIrIBNP409yJbC7III7IQNP+yB7OxIrIBNP409yVbC7III7IQNANXKCCyB7NCAe5IIQY0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/JFs1/lcoIDX9V0ggNfwhCFs1+0k1BUkiWzX6JVs1+YAEEEatczT6FlA0+RZQsDT9MQASRDT/NP4WUDT9UDT8UDT7FlA0+hZQNPkWUChLAVcAf2cqSwFXfwFnSCEENQEyBjUCQgGFSCEFNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JFs1/lcoIDX9STUFSVcAIDX8JFs1+4AEHUa0ITT8UDT7FlCwNP8xABJENP80/hZQNP1QNPxQNPsWUChLAVcAcGdIIQY1ATIGNQJCARpJIwxAAJ1JIQcMQAA9SCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhCVsPRLEisgE0AyRbsggjshA0A1cAILIHs0IAtEgjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8kWzX+STUFNf2ABJKjUII0/VCwMgY0AyEJWwxENP6IAOU0/zT+FlAxAFAoSwFXAEhnSCEFNQEyBjUCQgB3SIGgjQaIAMEiNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwNP+IAJEyBjT+CDX9MQA0/xZQNP0WUChLAVcAMGdIIzUBMgY1AkIAHDEZIQQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v171",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v171",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v187",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v198",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v199",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v206",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v214",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v215",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v187",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v198",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v199",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v206",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v214",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v215",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200165838038062001658833981016040819052620000269162000298565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000139565b620000b9438360200151602001516200016460201b60201c565b8152604080516060808201835260006020808401828152848601838152338087528984015151835288518252600194859055439094558651928301939093525194810194909452519083015290608001604051602081830303815290604052600290805190602001906200012f929190620001bb565b505050506200035c565b81620001605760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b600082620001738382620002f8565b9150811015620001b55760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000157565b92915050565b828054620001c9906200031f565b90600052602060002090601f016020900481019282620001ed576000855562000238565b82601f106200020857805160ff191683800117855562000238565b8280016001018555821562000238579182015b82811115620002385782518255916020019190600101906200021b565b50620002469291506200024a565b5090565b5b808211156200024657600081556001016200024b565b604080519081016001600160401b03811182821017156200029257634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002ac57600080fd5b620002b662000261565b835181526040601f1983011215620002cd57600080fd5b620002d762000261565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200031a57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200033457607f821691505b602082108114156200035657634e487b7160e01b600052602260045260246000fd5b50919050565b6112ec806200036c6000396000f3fe6080604052600436106100795760003560e01c8063ab53f2c61161004b578063ab53f2c6146100e1578063ad2d91d114610104578063aff5115f14610117578063ebdbfdcc1461012a57005b80631e93b0f1146100825780637eea518c146100a657806383230757146100b95780639a3e3912146100ce57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610ee9565b61013d565b3480156100c557600080fd5b50600154610093565b6100806100dc366004610ee9565b6102bb565b3480156100ed57600080fd5b506100f661046d565b60405161009d929190610f0c565b610080610112366004610f7b565b61050a565b610080610125366004610f7b565b6106f8565b610080610138366004610f7b565b610a49565b61014d600160005414600d610c6f565b6101678135158061016057506001548235145b600e610c6f565b60008080556002805461017990610f97565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610f97565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a919061101f565b905061021e8160400151431015600f610c6f565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161024f929190611072565b60405180910390a16102633415600c610c6f565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102a0573d6000803e3d6000fd5b50600080805560018190556102b790600290610d47565b5050565b6102cb6001600054146009610c6f565b6102e5813515806102de57506001548235145b600a610c6f565b6000808055600280546102f790610f97565b80601f016020809104026020016040519081016040528092919081815260200182805461032390610f97565b80156103705780601f1061034557610100808354040283529160200191610370565b820191906000526020600020905b81548152906001019060200180831161035357829003601f168201915b5050505050806020019051810190610388919061101f565b905061039b81604001514310600b610c6f565b7fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f491533836040516103cc929190611072565b60405180910390a16103e5816020015134146008610c6f565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151845233835260039095554360015587519384019490945290519582019590955293511690830152906080015b60405160208183030381529060405260029080519060200190610467929190610d84565b50505050565b60006060600054600280805461048290610f97565b80601f01602080910402602001604051908101604052809291908181526020018280546104ae90610f97565b80156104fb5780601f106104d0576101008083540402835291602001916104fb565b820191906000526020600020905b8154815290600101906020018083116104de57829003601f168201915b50505050509050915091509091565b61051a6003600054146012610c6f565b6105348135158061052d57506001548235145b6013610c6f565b60008080556002805461054690610f97565b80601f016020809104026020016040519081016040528092919081815260200182805461057290610f97565b80156105bf5780601f10610594576101008083540402835291602001916105bf565b820191906000526020600020905b8154815290600101906020018083116105a257829003601f168201915b50505050508060200190518101906105d791906110a7565b90507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634338360405161060a9291906110ee565b60405180910390a161061e34156010610c6f565b8051610636906001600160a01b031633146011610c6f565b61067a6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015185168187019081528884013560608089019182528a8401356080808b01918252600460005543600155855197880198909852945193860193909352905190951690830152925191810191909152905160a082015260c001610443565b610708600560005414601b610c6f565b6107228135158061071b57506001548235145b601c610c6f565b60008080556002805461073490610f97565b80601f016020809104026020016040519081016040528092919081815260200182805461076090610f97565b80156107ad5780601f10610782576101008083540402835291602001916107ad565b820191906000526020600020905b81548152906001019060200180831161079057829003601f168201915b50505050508060200190518101906107c5919061111f565b90506107cf610e08565b7f5371140060fe309c492663b0377a291d12d8d92a35dabb2b67a32d0ade04bb6633846040516108009291906110ee565b60405180910390a161081434156018610c6f565b815161082c906001600160a01b031633146019610c6f565b604080516108789161085291602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836060015114601a610c6f565b61088d83602001602001358360a00151610c95565b808252608083015181146020830181905260c084015190911460408301526108b65760006108c9565b80604001516108c65760016108c9565b60005b6109165780602001516108e05780604001516108e3565b60005b61090f5780602001516108f75760006108fd565b80604001515b610908576000610919565b6000610919565b6002610919565b60015b6060820190815260808201805160009081905290516002602091820181905260a0850180516001908190529051830181905260c0860180519290925290519091019190915290511461098557600281606001511461097b578060a0015161098b565b806080015161098b565b8060c001515b60e082018190528251602084015191516001600160a01b03909116916108fc916109b59190610ce8565b6040518115909202916000818181858888f193505050501580156109dd573d6000803e3d6000fd5b5081604001516001600160a01b03166108fc610a0584602001518460e0015160200151610ce8565b6040518115909202916000818181858888f19350505050158015610a2d573d6000803e3d6000fd5b5060008080556001819055610a4490600290610d47565b505050565b610a596004600054146016610c6f565b610a7381351580610a6c57506001548235145b6017610c6f565b600080805560028054610a8590610f97565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab190610f97565b8015610afe5780601f10610ad357610100808354040283529160200191610afe565b820191906000526020600020905b815481529060010190602001808311610ae157829003601f168201915b5050505050806020019051810190610b1691906111bd565b90507fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3383604051610b499291906110ee565b60405180910390a1610b5d34156014610c6f565b6040810151610b78906001600160a01b031633146015610c6f565b610bca6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015185168187019081526060808901518189019081526080808b0151818b019081528c88013560a0808d019182528e88013560c0808f0191825260056000554360015589519b8c019c909c529851978a01979097529451909916928701929092525190850152945190830152925191810191909152905160e082015261010001610443565b816102b75760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082610ca2838261125d565b9150811015610ce25760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610c8c565b92915050565b6000811580610d0c57508282610cfe8183611275565b9250610d0a9083611294565b145b610ce25760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610c8c565b508054610d5390610f97565b6000825580601f10610d63575050565b601f016020900490600052602060002090810190610d819190610ebc565b50565b828054610d9090610f97565b90600052602060002090601f016020900481019282610db25760008555610df8565b82601f10610dcb57805160ff1916838001178555610df8565b82800160010185558215610df8579182015b82811115610df8578251825591602001919060010190610ddd565b50610e04929150610ebc565b5090565b6040518061010001604052806000815260200160001515815260200160001515815260200160008152602001610e51604051806040016040528060008152602001600081525090565b8152602001610e73604051806040016040528060008152602001600081525090565b8152602001610e95604051806040016040528060008152602001600081525090565b8152602001610eb7604051806040016040528060008152602001600081525090565b905290565b5b80821115610e045760008155600101610ebd565b600060408284031215610ee357600080fd5b50919050565b600060408284031215610efb57600080fd5b610f058383610ed1565b9392505050565b82815260006020604081840152835180604085015260005b81811015610f4057858101830151858201606001528201610f24565b81811115610f52576000606083870101525b50601f01601f191692909201606001949350505050565b600060608284031215610ee357600080fd5b600060608284031215610f8d57600080fd5b610f058383610f69565b600181811c90821680610fab57607f821691505b60208210811415610ee357634e487b7160e01b600052602260045260246000fd5b6040516060810167ffffffffffffffff81118282101715610ffd57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461101a57600080fd5b919050565b60006060828403121561103157600080fd5b611039610fcc565b61104283611003565b815260208301516020820152604083015160408201528091505092915050565b8035801515811461101a57600080fd5b6001600160a01b038316815281356020808301919091526060820190611099908401611062565b151560408301529392505050565b6000606082840312156110b957600080fd5b6110c1610fcc565b6110ca83611003565b8152602083015160208201526110e260408401611003565b60408201529392505050565b6001600160a01b038316815260808101610f0560208301848035825260208082013590830152604090810135910152565b600060e0828403121561113157600080fd5b60405160e0810181811067ffffffffffffffff8211171561116257634e487b7160e01b600052604160045260246000fd5b60405261116e83611003565b81526020830151602082015261118660408401611003565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600060a082840312156111cf57600080fd5b60405160a0810181811067ffffffffffffffff8211171561120057634e487b7160e01b600052604160045260246000fd5b60405261120c83611003565b81526020830151602082015261122460408401611003565b604082015260608301516060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561127057611270611247565b500190565b600081600019048311821515161561128f5761128f611247565b500290565b6000826112b157634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212204b5938984dc80aeaa7c7e84f1152849a04d979ecd9e44b47306ff604ecddb98d64736f6c634300080c0033`,
  BytecodeLen: 5720,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:38:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:44:49:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:45:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:54:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:62:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:80:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
