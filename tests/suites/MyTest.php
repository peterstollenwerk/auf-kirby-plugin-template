<?php
use PHPUnit\Framework\TestCase;

final class PluginTest extends TestCase {
  public function testTitleValue () {
    $this->assertEquals(site()->title()->value(), 'Auf-Kirby-Plugin-Template');
  }
}