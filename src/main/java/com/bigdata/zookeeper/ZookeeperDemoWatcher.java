package com.bigdata.zookeeper;

import org.apache.zookeeper.WatchedEvent;
import org.apache.zookeeper.Watcher;
import org.apache.zookeeper.ZooKeeper;
import org.apache.zookeeper.data.Stat;

import java.util.concurrent.CountDownLatch;

public class ZookeeperDemoWatcher implements Watcher {
    private static final CountDownLatch connectedSemaphore = new CountDownLatch(1);
    private static ZooKeeper zk = null;
    private static final Stat stat = new Stat();

    public static void main(String[] args) throws Exception {
        //zookeeper配置数据存放路径
        String path = "/chinahugh";
        //连接zookeeper并且注册一个默认的监听器
        zk = new ZooKeeper("192.168.1.128:2181", 5000, new ZookeeperDemoWatcher());
        //等待zk连接成功的通知
        connectedSemaphore.await();
        //获取path目录节点的配置数据，并注册默认的监听器
        System.out.println(new String(zk.getData(path, true, stat)));
        Thread.sleep(Integer.MAX_VALUE);

    }

    @Override
    public void process(WatchedEvent event) {
        //zk连接成功通知事件
        if (Watcher.Event.KeeperState.SyncConnected == event.getState()) {
            if (Event.EventType.None == event.getType() && null == event.getPath()) {
                connectedSemaphore.countDown();
            } else //zk目录节点数据变化通知事件
                if (event.getType() == Event.EventType.NodeDataChanged) {
                    try {
                        System.out.println("配置已修改，新值为：" + new String(zk.getData(event.getPath(), true, stat)));
                    } catch (Exception ignored) {
                    }
                }
        }
    }

}
